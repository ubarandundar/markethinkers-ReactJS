import { Fragment } from 'react';
import AboutSection from './AboutSection/AboutSection';
import BlogSection from './BlogSection/BlogSection';
import Footer from './Footer/Footer';
import GrowWithUs from './GrowWithUs/GrowWithUs';
import ReferancesSection from './ReferancesSection/ReferancesSection';
import Navbar from './Navbar/Navbar';
import OurPartnersSection from './OurPartnersSection/OurPartnersSection';
import SEOAnalyzerSection from './SEOAnalyzerSection/SEOAnalyzerSection';
import ServicesSection from './ServicesSection/ServicesSection';
import Welcome from './WelcomeSection/Welcome';

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Welcome />
      <ReferancesSection />
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

export default HomePage;