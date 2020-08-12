import React, { useState} from 'react';
import ShowStockData from './ShowStockData';

const StockMain = () => {
  const [loaded, setLoaded] = useState(false)
  const [xAxis, setXAxis ] = useState([])
  const [yAxis, setYAxis ] = useState([])
  const [stockSymbol, setStockSymbol] = useState('')
  
const submitHandler = (e) => {
 e.preventDefault();
 console.log(stockSymbol)
 const getData = async () => {
  const getXValues = [];
  const getYValues = [];

  const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=ZHSQDBJFT1MY4Z4Q`)
  const data = await response.json()
  for(let key in data['Time Series (Daily)']) {
    getXValues.push(key)
    getYValues.push(data['Time Series (Daily)'][key]['1. open'])
  }
  setXAxis(getXValues)
  setYAxis(getYValues)
  setLoaded(true)
}
getData();
}

const changeHandler = (e) => {
  setStockSymbol(e.target.value)
}

  return (
    <div>
      <h3>Search for latest stock information</h3>
      <form onSubmit={submitHandler}>
          <input 
            type="search" 
            placeholder="Type ticker symbol here"
            onChange={changeHandler} 
          />
          <button type="submit">Search</button>
      </form>
      {loaded && 
      <ShowStockData xAxis={xAxis} yAxis={yAxis} stockSymbol={stockSymbol}/>
      }
    </div>   
  )
}

export default StockMain;

