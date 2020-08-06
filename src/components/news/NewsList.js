import React from 'react';

const NewsList = ({articles}) => {
return (
  <div className="news-container" style={{display: "flex"}}>
    {articles.map((article,i) => (
    <div className="news-article" 
      style={{height: "100%", padding: "50px", width: "150px", border: "1px solid lightgray", margin: "25px"}} 
      key={i}>{article.title}
    </div>
  ))}
  </div>
)
}

export default NewsList;