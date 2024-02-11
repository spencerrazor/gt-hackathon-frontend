
import ApexCharts from "apexcharts";
export var options = {
    series: [
      {
        name: "Price",
        data: ["788", "810", "866", "788", "1100", "1200", "900", "1000", "1100", "200", "300", "80"],
        color: "#37073d",
      }
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      width: "100%",
      height: "100%",
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 0,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return "$" + value
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        },
        formatter: function(value) {
          return "$" + value
        }
      },
      categories: ['Health Plan A', 'Health Plan B', 'Health Plan C', 'Health Plan D', 'Health Plan E', 'Health Plan F', 'Health Plan G', 'Health Plan H', 'Health Plan I', 'Health Plan J', 'Health Plan K', 'Health Plan L', 'wer', 'wer', 'wer', 'wer', 'werew', 'werewr', 'werewr', 'werew', ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      // padding: {
      //   left: 2,
      //   right: 2,
      //   top: -20
      // },
    },
    fill: {
      opacity: 1,
    }
  }

export const chart = new ApexCharts(document.querySelector("#bar-chart"), options);
