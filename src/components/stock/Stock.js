import React, { useState, useEffect } from 'react';
import Graph from './Graph';

const Stock = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [ stocks, setStocks ] = useState([])
  const [ stockXvalue, setStockXValue ] = useState([]);
  const [ stockYvalue, setStockYValue ] = useState([]);
  const [stockInput, setStockInput ] = useState()

  const stockSymbol = 'FB'

  const myFetch = () => {
    const xValues = [];
    const yValues = []

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=ZHSQDBJFT1MY4Z4Q`)
    .then(res => res.json())
    .then(
      (result) => {
      setIsLoaded(true);
      //setStocks(result)
      for(let key in result['Time Series (Daily)']) {
        xValues.push(key)
        yValues.push(result['Time Series (Daily)'][key]['1. open'])
      }
      setStockXValue(xValues)
      setStockYValue(yValues)
    },
    (error) => {
      setIsLoaded(true);
      setError(error)
    })
  }

  useEffect(() => {
    myFetch()
  },[])
  
  if(error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h3>Stock change over past 100 days</h3>
        <form>
          <input type="text" placeholder="Enter Ticker Symbol here"></input>
          <button>Search</button>
        </form>
        <Graph 
          stockXValue={stockXvalue} 
          stockYValue={stockYvalue} 
          stockSymbol={stockSymbol}/>
      </div>
    )
  }
}

export default Stock;