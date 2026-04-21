import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import ProcessSteps from './components/ProcessSteps';
import BTUCalculator from './components/BTUCalculator';
import CoverageArea from './components/CoverageArea';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <Testimonials />
        <ProcessSteps />
        <BTUCalculator />
        <CoverageArea />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
