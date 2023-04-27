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
import CareerDetails from './components/CareerDetails/CareerDetails';
import Expertise from './components/Expertise/Expertise';
import SuccessStoriesDetails from './components/SuccessStroiesDetails/SuccessStoriesDetails';
import BlogDetails from './components/BlogDetails/BlogDetails';
import WordCounter from './components/WordCounter/WordCounter';

function App() {
  return (
    <Fragment>
      <HomePage />
      <hr />
      <SuccessStories />
      <hr />
      <SuccessStoriesDetails />
      <hr />
      <Expertise />
      <hr />
      <Tools />
      <hr />
      <WordCounter />
      <hr />
      <AboutUs />
      <hr />
      <Career />
      <hr />
      <CareerDetails />
      <hr />
      <Contact />
      <hr />
      <Blog />
      <hr />
      <BlogWriter />
      <hr />
      <BlogDetails />
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
