import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import CloudBanking from "./components/CloudBanking";
import CTABanner from "./components/CTABanner";
import Ticker from "./components/Ticker";
import DigitalBanking from "./components/DigitalBanking";
import Blog from "./components/Blog";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import OurCaseStudies from "./components/ourCaseStudies";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <CloudBanking />
      <CTA />
      
      <DigitalBanking />
      <Blog />
      <OurCaseStudies />
      <CTABanner />
      <Footer />
    </main>
  );
}
