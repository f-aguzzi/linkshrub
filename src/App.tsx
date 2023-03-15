import React from 'react';
import logo from './logo.svg';
import './App.css';

const linkTest = () => {
  return (
    <button className="bg-red-500">
      <h1 className="text-2xl">link</h1>
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className="text-6xl"> LinkShrub </h1>
      <div className="grid grid-cols-1 place-content-center">
        {linkTest()}
        {linkTest()}
        {linkTest()}
      </div>
    </div>
  );
}

export default App;
