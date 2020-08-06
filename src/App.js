import React from 'react';
import './App.css';
import NewsAPI from './components/news/NewsAPI';
import Stock from './components/stock/Stock';

function App() {
  return (
    <div className="App">
      <NewsAPI />
      <Stock />
    </div>
  );
}

export default App;
