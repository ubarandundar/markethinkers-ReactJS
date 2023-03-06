import { Fragment } from 'react';
import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import LookOuSection from './components/LookOutSection/LookOutSection';
import Navbar from './components/Navbar/Navbar';
import SEOAnalyzerSection from './components/SEOAnalyzerSection/SEOAnalyzerSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import Welcome from './components/WelcomeSection/Welcome';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Welcome />
      <LookOuSection />
      <SEOAnalyzerSection />
      <ServicesSection />
      <AboutSection />
    </Fragment>
  );
}

export default App;
