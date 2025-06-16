import { useState } from "react";
import Home from "./Home.jsx";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
function App() {
const [cartCount, setCartCount] =useState(0);
  return (
    <>
      <NavBar cartCount={cartCount}/>
      <Home cartCount={cartCount} setCartCount={setCartCount}/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
