import React,{  useState, useEffect } from 'react';
import sideImage from "./Black_and_Yellow_Gradient_Modern_Coffee_Presentation-removebg-preview.png";
import About from './About.jsx';
function Home({ cartCount,setCartCount }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [error, setError] = useState(null);
  const [showMessage,setShowMessage]=useState(null);
  const [idCoffeeTracked,setIdCoffeeTracked] =useState(null);
  const [upButton, setUpButton] = useState(true);

  
  const fetchCoffeeData = async (coffeeType) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = coffeeType === 'hot' 
        ? "https://api.sampleapis.com/coffee/hot"
        : "https://api.sampleapis.com/coffee/iced";
      
      const resp = await fetch(endpoint);
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleShowHotCoffee = () => {
    console.log("Showing hot coffee");
    setActiveFilter('hot');
    fetchCoffeeData('hot');
  };

  const handleShowIceCoffee = () => {
    console.log("Showing ice coffee");
    setActiveFilter('iced');
    fetchCoffeeData('iced');
  };

  const clearFilter = () => {
    setActiveFilter(null);
    setData([]);
  };

  const excludedTitles = ["Co-Fee", "Olla", "Latte Choco", "CofCof", "Latte Choco Noisette"];


  const handAddToCart= (coffeeId)=>{
    setCartCount(cartCount + 1);
    setShowMessage(idCoffeeTracked);
    setIdCoffeeTracked(coffeeId);
  }

  /*
  useEffect(() => {
    const handleUpButton = () => {
      const homeHeight = document.querySelector('.hero')?.offsetHeight || 0;

      if (window.scrollY > homeHeight) {
        setUpButton(true);
      } else {
        setUpButton(true);
      }
    };

    handleUpButton();
    window.addEventListener('scroll', handleUpButton);

    return () => {
      window.removeEventListener('scroll', handleUpButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };*/
  return (
    <div className="home" id='home'>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to CoffeeHub</h1>
          <p className="hero-subtitle">
            Discover the perfect cup of coffee, delivered fresh to your door
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Order Now</button>
            <a href={"#featured"} className="menuBtn">View Menu</a>
          </div>
        </div>
        <div className="hero-image">
          <img className='side-image' src={sideImage} alt='coffee side image'/>
        </div>
      </section>

      {/*About section*/}
      <About />
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose CoffeeHub?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Premium Quality</h3>
              <p>Sourced from the finest coffee farms around the world</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Fresh coffee delivered to your doorstep within 30 minutes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Roasting</h3>
              <p>Roasted to perfection by our experienced coffee masters</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Great Value</h3>
              <p>Premium coffee at affordable prices with loyalty rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coffees Section */}
      <section className="featured-coffees" id='featured'>
        <div className="container">
          <h2 className="section-title">Featured Coffees</h2>
          <div className='filter-buttons flex justify-evenly items-center'>
          <button className={`hot-coffee filter-button px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === 'hot' 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-red-100'
              }`} onClick={handleShowHotCoffee}>🔥 Hot Coffee</button>
          <button className={`ice-coffee filter-button px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === 'iced' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`} onClick={handleShowIceCoffee}>🧊 Iced Coffee</button>
              {activeFilter && (
              <button 
                onClick={clearFilter}
                className="clear-btn filter-button px-6 py-3 rounded-full font-semibold bg-gray-500 text-white hover:bg-gray-600 transition-colors"
              >
                🚫 Clear Coffee
              </button>
            )}
          </div>
           {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="text-4xl loading-coffee">☕</div>
              <p className="mt-4 text-gray-600">Loading delicious coffee...</p>
            </div>
          )}
          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="text-4xl">❌</div>
              <p className="mt-4 error-message">Error loading coffee data: {error}</p>
            </div>
          )}

          {/* No Filter Selected */}
          {!activeFilter && !loading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">☕</div>
              <p className="text-gray-600 text-lg">Select a coffee type to see our delicious options!</p>
            </div>
          )}
          <div className="coffee-grid">
            {data.filter(coffee => 
                coffee.image !== "none" && 
                !excludedTitles.includes(coffee.title)
              ).map(coffee => (
              <div key={coffee.id} className="coffee-card">
                <div className="coffee-image">
                  <img 
                    src={coffee.image} 
                    alt={coffee.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="coffee-info">
                  <h3 className="coffee-name">{coffee.title}</h3>
                  <p className="coffee-description">{coffee.description}</p>
                  <p className='coffee-ingredients'>
                    <h3>Ingredients</h3>
                    <ul>
                      {coffee.ingredients && Array.isArray(coffee.ingredients) ? (
                        coffee.ingredients.map((ingredient, index) => (
                          <li className='ingredient-item' key={index}>{ingredient}</li>
                        ))
                      ) : (
                        <li className='ingredient-item'>No ingredients available</li>
                      )}
                    </ul>
                  </p>
                  <div className="coffee-footer">
                    <span className="coffee-price">15 $</span>
                    <button className="btn btn-small" onClick={() => handAddToCart(coffee.id)}>Add to Cart</button>
                  </div>
                  {idCoffeeTracked === coffee.id &&
                        (<div className='success-message fade-in-elemnt'>✅ Added to Cart successfully</div>)
                    }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for the Perfect Cup?</h2>
            <p>Join thousands of coffee lovers who trust CoffeeHub for their daily brew</p>
            <button className="btn btn-primary btn-large">Start Your Order</button>
          </div>
        </div>
      </section>
      {/* Scroll-To-Top Button */}
        <button
          className="up-button slide-in-element"
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-circle-chevron-up fa-lg"></i>
        </button>
    </div>
  );
}

export default Home;