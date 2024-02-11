
import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { options } from '../utils/chart';
import "../styles/Chart.css";
export function Chart({ selectedHospital, selectedService, selectedInsurance }) {
    const chartRef = useRef(null);
    const [chartWidth, setChartWidth] = useState('0%');
    const [chartData, setChartData] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [currentPosition, setCurrentPosition] = useState([33.77608671024301, -84.39760588902269]); // [latitude, longitude]

    const watchID = navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition([position.coords.latitude, position.coords.longitude]);
        
    });

    const getInsurancePrices = async () => {
        const response = await fetch('https://c073afdb-38fe-472f-a04e-cca55e7f40a0.mock.pstmn.io/locations/byCptAndHospital', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "key": "1ec0fb84-220a-4287-a70b-13f887c902b1"
            },
            body: JSON.stringify({
                "cpt_codes": ["0035U"],
                "user_lat": currentPosition[0],
                "user_lon": currentPosition[1],
                "insurance_id": selectedInsurance.id
            }),
        });
    
        const data = await response.json();

        let chartData = data.map(d => {
            return d['cost'];
        })

        let labelData = data.map(d => {
            return d['provider_name'] + " " + d['plan_type'];
        })

        setChartData(chartData)

        setChartLabels(labelData);

        return {"data": chartData, "labels": labelData};
    }


    useEffect(() => {
        const fn = async () => {

        const r = await getInsurancePrices();

          const chartElement = document.querySelector("#barchart");
      
          // Clear the chart's container
          chartElement.innerHTML = '';
      
          var chart = new ApexCharts(chartElement, options);
          chart.render();

          let newOptions;

          if (chartData.length === 0) {
            newOptions = {
                series: [{
                  name: 'Cost',
                  data: r.data
                }],
                xaxis: {
                  categories: r.labels
                },
              };
          } else {
            newOptions = {
                series: [{
                  name: 'Cost',
                  data: chartData
                }],
                xaxis: {
                  categories: chartLabels
                },
              };
          }
      
          chart.updateOptions(newOptions);
      
          // set a delay to animate the chart
          setTimeout(() => {
            setChartWidth('100%');
          }, 500);
      }

      fn();
    
    }, []); // Empty array



  return  (
    <div id="chart-container" className="bg-white dark:bg-gray-800 p-4" style={{ width: chartWidth}}>
        <div className='bold flex justify-center'>
            <h1 className='font-bold text-xl'>Cost of Service by Insurance Plans at Hospital</h1>
        </div>
        <div id="barchart"></div>
    </div>  
  )

}

export default Chart;