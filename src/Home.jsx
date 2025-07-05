import {  useState, useEffect, useRef } from 'react';
import sideImage from "./Black_and_Yellow_Gradient_Modern_Coffee_Presentation-removebg-preview.png";
import About from './About.jsx';
import successIcon from "./roundedSuccess.svg";
import OrderImage from "./Coffee Logo.png";

function Home({ cartCount,setCartCount }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [error, setError] = useState(null);
  const [showMessage,setShowMessage]=useState(null);
  const [idCoffeeTracked,setIdCoffeeTracked] =useState(null);
  const [upButton, setUpButton] = useState(false);
  const [hoveredCoffeeId, setHoveredCoffeeId] = useState(null);
  const [showOrder,setShowOrder] = useState(false);
  const [coffeeOrder, setCoffeeOrder] = useState({fullname:"",phone:"",email:"",coffeeType:"",specialRequests:""});
  const [successMessage, setSuccessMessage] = useState(false);
  const heroTitleRef =  useRef(null);

  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const generatedPrices = {};
      data.forEach(coffee => {
        generatedPrices[coffee.id] = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
      });
      setPrices(generatedPrices);
    }
  }, [data]);
  
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


  const handleAddToCart= (coffeeId)=>{
    setCartCount(cartCount + 1);
    setShowMessage(idCoffeeTracked);
    setIdCoffeeTracked(coffeeId);
  }
  
  const handleOnMouseEnterCart = (coffeeId) => {
  setHoveredCoffeeId(coffeeId);
};

const handleOnMouseLeaveCart = () => {
  setHoveredCoffeeId(null);
};


  
  useEffect(() => {
    const handleUpButton = () => {
      const homeHeight = document.querySelector('.hero')?.offsetHeight || 0;
      if (window.scrollY > homeHeight) {
        setUpButton(true);
      } else {
        setUpButton(false);
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
  };

  useEffect(() => {
    const homeAnimation = document.querySelectorAll('.fade-up-element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    }, { threshold: 0.1 });

    homeAnimation.forEach(element => {
      observer.observe(element);
    });

    return () => {
      homeAnimation.forEach(element => observer.unobserve(element));
    };
  }, []);

  const handleCoffeeOrderShow = ()=>{
    setShowOrder(true);

  }
  const handleCancel = ()=>{
    setShowOrder(false);
    setCoffeeOrder({fullname:"",phone:"",email:"",coffeeType:"",specialRequests:""});
  }

  const handleCoffeeChange = (e)=>{
    setCoffeeOrder({...coffeeOrder,[e.target.name]:e.target.value});
  }
  const handleCoffeeOrderSubmit = (e)=>{
    e.preventDefault();
    if(coffeeOrder.fullname !== "" || coffeeOrder.phone !== "" || coffeeOrder.email !== "" || coffeeOrder.coffeeType !== "" || coffeeOrder.specialRequests !== "" ){
      setSuccessMessage(true);
      console.log("the order data : ", coffeeOrder)
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setSuccessMessage(false);
    },3000)
  },[successMessage]);

  useEffect(()=>{
    if (heroTitleRef.current){
        const HeroTitlewidth = heroTitleRef.current.offsetWidth;
        console.log("The width of the hero title is: ", HeroTitlewidth);
    }
  },[]);

  


  return (
    <div className="home" id='home'>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title fade-up-element" ref={heroTitleRef}>Welcome to CoffeeHub</h1>
          <p className="hero-subtitle fade-up-element">
            Discover the perfect cup of coffee, delivered fresh to your door
          </p>
          <div className="hero-buttons fade-up-element">
            <button className="btn btn-primary" onClick={handleCoffeeOrderShow}>Order Now</button>
            <a href={"#featured"} className="menuBtn">View Menu</a>
          </div>
        </div>
        <div className="hero-image pop-up-element">
          <img className='side-image' src={sideImage} alt='coffee side image'/>
        </div>
      </section>

      {/*About section*/}
      <About />
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title fade-up-element">Why Choose CoffeeHub?</h2>
          <div className="features-grid">
            <div className="feature-card pop-up-element">
              <div className="feature-icon">🌱</div>
              <h3>Premium Quality</h3>
              <p>Sourced from the finest coffee farms around the world</p>
            </div>
            <div className="feature-card pop-up-element">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Fresh coffee delivered to your doorstep within 30 minutes</p>
            </div>
            <div className="feature-card pop-up-element">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Roasting</h3>
              <p>Roasted to perfection by our experienced coffee masters</p>
            </div>
            <div className="feature-card pop-up-element">
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
          <h2 className="section-title fade-up-element">Featured Coffees</h2>
          <div className='filter-buttons flex justify-evenly items-center fade-up-element'>
          <button className={`hot-coffee filter-button px-6 py-3 rounded-full font-semibold transition-all  ${
                activeFilter === 'hot' 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-red-100'
              }`} onClick={handleShowHotCoffee}>🔥 Hot Coffee</button>
          <button className={`ice-coffee filter-button px-6 py-3 rounded-full font-semibold transition-all  ${
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
            <div className="text-center py-12 fade-in-element">
              <div className="text-4xl loading-coffee">☕</div>
              <p className="mt-4 text-gray-600">Loading delicious coffee...</p>
            </div>
          )}
          {/* Error State */}
          {error && (
            <div className="text-center py-12 fade-in-element">
              <div className="text-4xl">❌</div>
              <p className="mt-4 error-message">Error loading coffee data: {error}</p>
            </div>
          )}

          {/* No Filter Selected */}
          {!activeFilter && !loading && (
            <div className="text-center py-12 fade-up-element">
              <div className="text-6xl mb-4">☕</div>
              <p className="text-gray-600 text-lg">Select a coffee type to see our delicious options!</p>
            </div>
          )}
          <div className="coffee-grid">
            {data.filter(coffee => 
                coffee.image !== "none" && 
                !excludedTitles.includes(coffee.title)
              ).map(coffee => (
              <div key={coffee.id} className="coffee-card fade-in-element">
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
                    <p className='title'>Ingredients</p>
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
                    <span className="coffee-price">{prices[coffee.id]}$</span>
                        <button
                          className="btn btn-small"
                          onClick={() => handleAddToCart(coffee.id)}
                          onMouseEnter={() => handleOnMouseEnterCart(coffee.id)}
                          onMouseLeave={handleOnMouseLeaveCart}
                        >
                          🛒
                          <span className={`cart-text ${hoveredCoffeeId === coffee.id ? "visible" : ""}`}>
                            Add to cart
                          </span>
                        </button>
                    </div>
                  {idCoffeeTracked === coffee.id &&
                        (<div className='success-message fade-in-element'>
                          <img src={successIcon} alt="Success" style={{width: '20px', height: '20px', marginRight: '8px'}} />
                          Added to Cart successfully</div>
                          )
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
          <div className="cta-content fade-up-element">
            <h2>Ready for the Perfect Cup?</h2>
            <p>Join thousands of coffee lovers who trust CoffeeHub for their daily brew</p>
            <button className="btn btn-primary btn-large">Start Your Order</button>
          </div>
        </div>
      </section>
      {/* Scroll-To-Top Button */}
      {upButton && (
        <button
          className="up-button slide-in-element"
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-circle-chevron-up fa-2xl"></i>
        </button>
      )}
       {/*Coffee order*/}
       {showOrder &&
       <div className='order-card fade-in-element'>
        <img className='order-img' src={OrderImage} alt='order image'/>
        <button className='cancel-btn' onClick={handleCancel}></button>
        <form className='order-form' onSubmit={handleCoffeeOrderSubmit}>
          <h2 className='order-title'> Order Now </h2>
          <input className='order-input' name="fullname" type="text"  placeholder='Full name' value={coffeeOrder.fullname} onChange={handleCoffeeChange} required/>
          <input className='order-input' name="phone" type='number' placeholder='phone number' value={coffeeOrder.phone} onChange={handleCoffeeChange} required/>
          <input className='order-input' name='email' type='email' placeholder='Email' value={coffeeOrder.email} onChange={handleCoffeeChange} required/>
          <select className="order-input" name='coffeeType' value={coffeeOrder.coffeeType} onChange={handleCoffeeChange} required>
                    <option value="">Select your coffee</option>
                    <option value="espresso">Espresso</option>
                    <option value="latte">Latte</option>
                    <option value="cappuccino">Cappuccino</option>
                    <option value="americano">Americano</option>
                    <option value="mocha">Mocha</option>
          </select>
          <input className="order-input" name='specialRequests' value={coffeeOrder.specialRequests} onChange={handleCoffeeChange} type="text" placeholder="Any special requests?" required/>
          <button className='send-order' type='submit'>Place Order</button>
        </form>
       </div>
       }
       {successMessage &&
              <div className="success-order-container pop-in-element">
                <img src={successIcon} alt="Success" style={{width: '20px', height: '20px', marginRight: '8px'}} />
                <p className="success-order-message">Order Seved successfully </p>
              </div>
         }
         
    </div>
   
  );
}

export default Home;