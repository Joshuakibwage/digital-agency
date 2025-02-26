import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;