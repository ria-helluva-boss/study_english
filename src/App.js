import React from 'react';
import './App.css';
import Table from './components/Table';
import data from './data';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Table data={data} />
      {data.map((item, index) => (
        <Card key={index} english={item.english} transcription={item.transcription} russian={item.russian} />
      ))}
    </div>
  );
}

export default App;
