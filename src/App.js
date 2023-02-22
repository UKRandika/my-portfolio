import React from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Works from "./components/Works";

function App() {
  return (
    <div className="overflow-x-hidden">
     <NavBar />
     <Hero />
     <About />
     <ContactMe />
     <Works />
    </div>
  );
}

export default App;
