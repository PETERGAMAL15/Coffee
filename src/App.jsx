import Navbar from "./component/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Banner from "./component/Banner/Banner";
import AppStore from "./component/AppStore/AppStore";
import Testimonials from "./component/Testimonials/Testimonials.jsx";
import Footer from "./component/Footer/Footer.jsx";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
