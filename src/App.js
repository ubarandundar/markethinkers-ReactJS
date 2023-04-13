import { Fragment } from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <Fragment>
      <HomePage />
      <hr />
      <AboutUs />
      <hr />
      <Contact />
      <hr />
    </Fragment>
  );
}

export default App;
