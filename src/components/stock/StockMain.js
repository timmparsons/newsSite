import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import ShowStockData from './ShowStockData';
//import FetchStockData from './FetchStockData';

const StockMain = () => {
  //const [stockData, setStockData] = useState([])
  const [error, setError ] = useState(null)
  const [loaded, setIsLoaded] = useState(false)
  const [xAxis, setXAxis ] = useState([])
  const [yAxis, setYAxis ] = useState([])
  const stockSymbol = 'FB'

  useEffect(() => {
    const getData = async () => {
      const getXValues = [];
      const getYValues = [];

      const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=ZHSQDBJFT1MY4Z4Q`)
      const data = await response.json()
      setIsLoaded(true)
      for(let key in data['Time Series (Daily)']) {
        getXValues.push(key)
        getYValues.push(data['Time Series (Daily)'][key]['1. open'])
      }
      setXAxis(getXValues)
      setYAxis(getYValues)
    }
    getData()
  },[])
  
if(error) {

}
  return (
    <div>
      <SearchBar />
      <ShowStockData xAxis={xAxis} yAxis={yAxis} stockSymbol={stockSymbol}/>
    </div>   
  )
}

export default StockMain;