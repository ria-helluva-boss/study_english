import React from 'react';
import './App.css';
import Table from './components/Table';
import data from './data';
import Carousel  from './components/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import styles from './components/Navigation.module.css';
import NotFound from './components/NotFound';
function App() {
  return (
    <div>
      <Router>
        <div>
          <header>
            <nav>
              <ul className={styles.navigation}>
              <li><Link to='/game'>Тренажёр</Link></li>
                <li><Logo /></li>
                <li><Link to='/game'>Тренажёр</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Table/>} />
              <Route path='/game' element={<Carousel cards ={data}/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </main>
          <footer>

          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
