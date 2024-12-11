import React from 'react';
import './App.css'
import Table from './components/jsx/Table';
import Carousel from './components/jsx/Carousel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/jsx/Logo';
import styles from './components/modules_css/Navigation.module.css';
import NotFound from './components/jsx/NotFound';
import Footer from './components/jsx/Footer';
function App() {

  return (
    <div className={styles.body}>
      <Router>
        <header>
          <nav className={styles.navigation}>
            <ul className={styles.navigation__ul}>
              <li><Logo /></li>
              <li><Link className={`${styles.link} ${styles.link__trainer}`} to='/game'>Тренажер</Link></li>
              <li><a href="#" className={styles.link}>+7 (999) 888-77-66</a></li>
            </ul>
          </nav>
        </header>
        <main className={styles.container}>
          <Routes>
            <Route path='/' element={<Table />} />
            <Route path='/game' element={<Carousel />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
