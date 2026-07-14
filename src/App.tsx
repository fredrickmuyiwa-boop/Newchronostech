import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Industries } from './components/Industries';
import { Stats } from './components/Stats';
import { Insights } from './components/Insights';
import { Newsletter } from './components/Newsletter';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Industries />
        <Stats />
        <Insights />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
