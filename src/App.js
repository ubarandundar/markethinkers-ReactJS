import { Fragment } from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HomePage from './components/Home/HomePage';
import TermsOfService from './components/TermsOfService/TermsOfService';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Tools from './components/Tools/Tools';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <Fragment>
      <HomePage />
      <hr />
      <Tools />
      <hr />
      <AboutUs />
      <hr />
      <Contact />
      <hr />
      <FAQ />
      <hr />
      <TermsOfService />
      <hr />
      <ErrorPage />
    </Fragment>
  );
}

export default App;
