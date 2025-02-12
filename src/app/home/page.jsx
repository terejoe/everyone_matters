import Creating from "./creating/page";
import CoreFocus from "./focus/page";
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
      <CoreFocus/>
      <Involved/>
      <Footer/>
    </div>
  );
};

export default Home;