import React from 'react';
import './App.css';
import NewsAPI from './components/news/NewsAPI';
import StockMain from './components/stock/StockMain';
import CanvasMain from './components/canvas/CanvasMain';

function App() {
  return (
    <div className="App">
      <NewsAPI />
      <StockMain />
      <CanvasMain />
    </div>
  );
}

export default App;
