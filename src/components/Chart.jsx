
import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { options } from '../utils/chart';
import "../styles/Chart.css";
export function Chart() {
    const chartRef = useRef(null);
    const [chartWidth, setChartWidth] = useState('0%');


  useEffect(() => {
    const chartElement = document.querySelector("#barchart");

    
    // Clear the chart's container
    chartElement.innerHTML = '';
    
    
    var chart = new ApexCharts(document.querySelector("#barchart"), options);
    
    chart.render();

    // sete a delay to animate the chart
    setTimeout(() => {
      setChartWidth('100%');
    }, 500);

    // const chartContainer = document.querySelector("#barchart");

    // console.log(chartContainer)
    // let width = 0;

    // function animateChart() {
    //     width += 1; // Increase the width by 1%
    //     chartContainer.style.width = `${width}%`;

    //     if (width < 100) {
    //         requestAnimationFrame(animateChart); // Continue the animation if the width is less than 100%
    //     }
    // }

    // animateChart(); //
  }, []); // Empty array means this useEffect will run once on component mount



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