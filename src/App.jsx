import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./components/ServicesPage";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesPage />
      <CaseStudies />
      <Process />
      <Footer />
    </>
  );
}

export default App;
