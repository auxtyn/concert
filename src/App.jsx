// import { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Programme from "./sections/Programme";
// import Test from "./components/Test";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <Programme />
      </div>
    </>
  );
}

export default App;
