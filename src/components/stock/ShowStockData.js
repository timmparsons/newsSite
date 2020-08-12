import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const ShowStockData = ({xAxis,yAxis,stockSymbol}) => {
  
  return (
    <Plot
      data={[
        {
          x: xAxis,
          y: yAxis,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        }
      ]}
      layout={{width: 720, height: 440, title: `${stockSymbol}`}}
    />
  )
}

export default ShowStockData;