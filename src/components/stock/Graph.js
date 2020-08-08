import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const Graph = ({stockXValue,stockYValue,stockSymbol}) => {
  
  return (
    <Plot
      data={[
        {
          x: stockXValue,
          y: stockYValue,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        }
      ]}
      layout={{width: 720, height: 440, title: `${stockSymbol}`}}
    />
  )
}

export default Graph;