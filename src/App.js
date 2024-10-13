import React from 'react';
import './App.css';
import Table from './components/Table';
import data from './data';
import { Carousel } from 'bootstrap';

function App() {
  return (
    <div>
      <Table/>
      <Carousel cards ={data}/>
    </div>
  );
}

export default App;
