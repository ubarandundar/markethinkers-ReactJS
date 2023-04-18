import { Fragment } from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HomePage from './components/Home/HomePage';
import TermsOfService from './components/TermsOfService/TermsOfService';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Tools from './components/Tools/Tools';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import BlogWriter from './components/BlogWriter/BlogWriter';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Career from './components/Career/Career';

function App() {
  return (
    <Fragment>
      <HomePage />
      <hr />
      <SuccessStories />
      <hr />
      <Tools />
      <hr />
      <AboutUs />
      <hr />
      <Career />
      <hr />
      <Contact />
      <hr />
      <Blog />
      <hr />
      <BlogWriter />
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
