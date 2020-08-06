import React, { useState, useEffect } from 'react';

const Stock = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [ stocks, setStocks ] = useState([])
  const [ stockXvalue, setStockXValue ] = useState([]);
  const [ stockYvalue, setStockYValue ] = useState([]);
  const [stockInput, setStockInput ] = useState()
  
  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=ZHSQDBJFT1MY4Z4Q`)
      .then(res => res.json())
      .then(
        (result) => {
        setIsLoaded(true);
        setStocks(result)
      },
      (error) => {
        setIsLoaded(true);
        setError(error)
      })
  },[])
  console.log(stocks)
  if(error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h3>Latest Stocks</h3>
      </div>
    )
  }
}

export default Stock;