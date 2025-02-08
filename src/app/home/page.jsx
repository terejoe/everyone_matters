import Creating from "./creating/page";
import Footer from "./footer/page";
import Hero from "./hero/page";
import Involved from "./involved/page";
import Reports from "./reports/page";


const Home = () => {
  return (
    <div>
      <Hero/>
      <Creating/>
      <Reports/>
      <Focus/>
      <Involved/>
      <Footer/>
    </div>
  );
};

export default Home;