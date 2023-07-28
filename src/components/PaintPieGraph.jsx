import React from 'react';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');

export const PaintPieGraph = ({ data }) => {
  const options = {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Consumo tramo',
        type: 'pie',
        radius: [50, 80],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: data
      }
    ]
  }
  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      theme={"theme_name"}
    // onChartReady={this.onChartReadyCallback}
    // onEvents={EventsDict}
    />

  )
}