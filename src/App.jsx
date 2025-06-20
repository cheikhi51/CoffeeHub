import { useState,useEffect } from "react";
import Home from "./Home.jsx";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [cartCount, setCartCount] =useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate app loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-page-icon page-element">☕</div>
    );
  }

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
