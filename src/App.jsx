// import { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Programme from "./sections/Programme";
import { Route, Routes } from "react-router";
import Lyrics from "./pages/Lyrics";
import Home from "./pages/Home";
// import Test from "./components/Test";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto max-w-7xl">
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lyrics" element={<Lyrics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
