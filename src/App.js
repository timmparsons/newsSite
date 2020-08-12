import React from 'react';
import './App.css';
import NewsAPI from './components/news/NewsAPI';
import StockMain from './components/stock/StockMain';

function App() {
  return (
    <div className="App">
      <NewsAPI />
      <StockMain />
    </div>
  );
}

export default App;
