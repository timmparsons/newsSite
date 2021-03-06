import React from 'react';

const NewsList = ({articles}) => {
return (
  <div className="news-container" style={{display: "flex"}}>
    {articles.map((article,i) => (
    <div className="news-article" 
      style={{minHeight: "100%", 
        padding: "50px", 
        width: "200px", 
        border: "1px solid lightgray", 
        margin: "25px"}} 
      key={i}>
        <div><span>Title: {article.title}</span></div>
    </div>
  ))}
  </div>
)
}

export default NewsList;