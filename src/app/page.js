
import Creating from "./home/creating/page";
import CoreFocus from "./home/focus/page";
import Footer from "./home/footer/page";
import Hero from "./home/hero/page";
import Involved from "./home/involved/page";
import Reports from "./home/reports/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Creating/>
      <Reports/>
      <CoreFocus/>
      <Involved/>
      <Footer/>
    </div>
  );
}
