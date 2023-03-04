import { Fragment } from 'react';
import './App.css';
import LookOuSection from './components/LookOutSection/LookOutSection';
import Navbar from './components/Navbar/Navbar';
import SEOAnalyzerSection from './components/SEOAnalyzerSection/SEOAnalyzerSection';
import Welcome from './components/WelcomeSection/Welcome';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Welcome />
      <LookOuSection />
      <SEOAnalyzerSection />
    </Fragment>
  );
}

export default App;
