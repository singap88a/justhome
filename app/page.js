import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Find_Properties from "./components/Find_Properties";
import Why_Work_With_Us from "./components/Why_Work_With_Us";
import Featured_Properties from "./components/Featured_Properties";
import Streamline_your_search from "./components/Streamline_your_search";
import Discover from "./components/Discover";
import Appreciation from "./components/Appreciation";
import Customers from "./components/Customers";
import Recent_Articles from "./components/Recent_Articles";
import Download from "./components/Download";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
 
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Find_Properties />
      <Why_Work_With_Us />
      <Streamline_your_search/>
      <Featured_Properties />
      <Discover/>
      <Appreciation/>
      <Customers/>
      <Recent_Articles/>
      <Download/>
      <Newsletter/>
      <Footer/>
     </main>
  );
}
