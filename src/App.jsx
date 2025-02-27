import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import BrandLogo from "./components/BrandLogo";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";



const App = () => {

  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials />
      <Blogs />
    </div>
  );
}

export default App;