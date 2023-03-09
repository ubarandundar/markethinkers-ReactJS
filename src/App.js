import { Fragment } from 'react';
import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import BlogSection from './components/BlogSection/BlogSection';
import Footer from './components/Footer/Footer';
import GrowWithUs from './components/GrowWithUs/GrowWithUs';
import LookOuSection from './components/LookOutSection/LookOutSection';
import Navbar from './components/Navbar/Navbar';
import OurPartnersSection from './components/OurPartnersSection/OurPartnersSection';
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
      <OurPartnersSection />
      <BlogSection />
      <GrowWithUs />
      <Footer />
    </Fragment>
  );
}

export default App;
