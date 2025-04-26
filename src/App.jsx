import "./App.css";
import Cursor from "./Components/Cursor/Cursor";
import Footer from "./Components/Footer/Footer";
import FrequentlyAskedQuestions from "./Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import HandleLoadingComponent from "./Components/HandleLoadingComponent/HandleLoadingComponent";
import Hero from "./Components/Hero/Hero";
import NavBar1 from "./Components/NavBar1/NavBar1";
import NavBar2 from "./Components/NavBar2/NavBar2";
import Navigate from "./Components/Navigate/Navigate";
import OurBenefits from "./Components/OurBenefits/OurBenefits";
import OurTestimonials from "./Components/OurTestimonials/OurTestimonials";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <div className="bg-main">
      <HandleLoadingComponent />
      <ScrollToTop />
      <Cursor />
      <NavBar1 /> 
       <NavBar2 />
      <Hero />
      <OurBenefits />
      <OurTestimonials />
      <FrequentlyAskedQuestions />
      <Navigate />
      <Footer />
    </div>
  );
}

export default App;
