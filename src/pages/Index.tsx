import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CombosGrid from '@/components/CombosGrid';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CombosGrid />
      <MenuSection />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
