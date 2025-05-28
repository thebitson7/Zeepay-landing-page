import Header from './components/Header';
import Hero from './components/Hero';
import CashbackSlider from './components/CashbackSlider';
import CardFeatureSection from './components/CardFeatureSection';
import SendMoneySection from './components/SendMoneySection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CashbackSlider />
      <CardFeatureSection />
      <SendMoneySection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
