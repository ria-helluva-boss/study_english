import React from 'react';
import appstyles from './App.module.css';
import Table from './components/Table';
import Carousel from './components/Carousel';
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
              <li><Link className={styles.link} to='/game'>Тренажёр</Link></li>
              <li><Logo /></li>
              <li><a href="#" className={styles.link}>+7 (999) 888-77-66</a></li>
            </ul>
          </nav>
        </header>
        <main className={appstyles.container}>
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
