import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';


const NewsAPI = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [ news, setNews ] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4414b55b3dca44eda1681cfb1214c5b2&pageSize=5')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNews(result.articles)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if(error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h3>Top Headlines</h3>
        <ul>
          <NewsList articles={news}/>
        </ul>
      </div>
    )
  }
}

export default NewsAPI;