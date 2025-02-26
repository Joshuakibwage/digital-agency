import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import BrandLogo from "./components/BrandLogo";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandLogo />
    </div>
  );
}

export default App;