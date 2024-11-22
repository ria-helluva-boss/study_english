import React from 'react';
import appstyles from './App.module.css';
import Table from './components/Table';
import data from './data';
import Carousel  from './components/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import styles from './components/Navigation.module.css';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router>
          <header>
            <nav>
              <ul className={styles.navigation}>
              <li><Link to='/game'>Тренажёр</Link></li>
                <li><Logo /></li>
                <li><Link to='/game'>Тренажёр</Link></li>
              </ul>
            </nav>
          </header>
          <main className={appstyles.container}>
            <Routes>
              <Route path='/' element={<Table/>} />
              <Route path='/game' element={<Carousel cards ={data}/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </main>
          <footer>
            <Footer/>
          </footer>
      </Router>
    </div>
  );
}

export default App;
