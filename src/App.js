import React from 'react';
import './App.css';
import Table from './components/Table';
import data from './data';
import Carousel  from './components/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
            <li>
                <Link to='/'>
                <img 
                src={`${process.env.PUBLIC_URL}/images/mem.jpg`} 
                alt='мем' 
                style={{ width: '32rem' }} />
                </Link></li>
              <li><Link to='/'>Главная</Link></li>
              <li><Link to='/game'>Тренажёр</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Table/>} />
            <Route path='/game' element={<Carousel cards ={data}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
