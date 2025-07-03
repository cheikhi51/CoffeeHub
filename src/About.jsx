import { useEffect, useState } from 'react';
import aboutImage1 from "./about1_prev_ui.png";
import aboutImage2 from "./about2_prev_ui.png";
import aboutImage3 from "./about3_prev_ui.png";
import CountUp from 'react-countup';
import image1 from "./coffee-svgrepo-com.svg";
import image2 from "./users-svgrepo-com.svg";
import image3 from "./truck-svgrepo-com.svg";
import image4 from "./stars-svgrepo-com.svg";
import sideLine from './line-xl-svgrepo-com.svg'
function About() {

  const [start,setStart] = useState(false);
  console.log("coupt up : ", start);
  useEffect(()=>{
  const aboutanimation = document.querySelectorAll('.pop-up-element');
  const aboutobserver = new IntersectionObserver((entities)=>{
    entities.forEach(entry =>{
      if (entry.isIntersecting){
        entry.target.classList.add('pop-up');
      }
    });
  },{ threshold: 0.1 });

    aboutanimation.forEach(element=>{
      aboutobserver.observe(element);
    });

  return ()=>{
    aboutanimation.forEach(element => aboutobserver.unobserve(element));
   };

  }, []);
  const handleStartCouptUp = ()=>{
    const CouptUpObserver = new IntersectionObserver((entities)=>{
      entities.forEach(entry=>{
        if(entry.isIntersecting){
          setStart(true);
        }
      })
    })
  }
  return (
    <div className="about-section" id="about">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title fade-up-element">About CoffeeHub</h1>
          <p className="hero-subtitle-about fade-up-element">
            Your trusted partner in delivering exceptional coffee experiences, one cup at a time
          </p>
          <div className='about-images'>
          <img className="about-image pop-up-element" src={aboutImage2} alt='The about side Image'/>
          <img className="about-image pop-up-element" src={aboutImage1} alt='The about side Image'/>
          <img className="about-image pop-up-element" src={aboutImage3} alt='The about side Image'/>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title fade-up-element">Our Coffee Journey</h2>
              <p className="story-text fade-up-element">
                CoffeeHub was born from a simple passion: bringing the world's finest coffee directly to coffee lovers everywhere. What started as a small dream has grown into a platform that connects you with premium coffee from master roasters and local artisans.
              </p>
              <p className="story-text fade-up-element">
                We believe that great coffee should be accessible to everyone, whether you're starting your morning routine or taking an afternoon break. Every cup tells a story, and we're here to help you discover yours.
              </p>
            </div>
            <div className="story-image">
              <div className="story-card">
                <h2 className='section-title fade-up-element'>Our Mission</h2>
                <p className='story-text fade-up-element'>To make exceptional coffee accessible through innovative technology and passionate service. We bring joy and energy to your daily routine, one perfect cup at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <h2 className="section-title fade-up-element">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card pop-up-element">
              <div className="stat-icon"><img src={image1} style={{width:'50px',height:"50px"}} alt='coffee image'/></div>
              <div className="stat-number" onView={handleStartCouptUp}><CountUp start={0} end={50} duration={10} separator="," startWhen={start}/>K+</div>
              <div className="stat-label">Cups Served</div>
            </div>
            <span className='side-line'><img src={sideLine} style={{width:"50px"}} /></span>
            <div className="stat-card pop-up-element">
              <div className="stat-icon"><img src={image2} style={{width:'50px',height:"50px"}} alt='users image'/></div>
              <div className="stat-number" onView={handleStartCouptUp}><CountUp start={0} end={5} duration={10} separator="," startWhen={start}/>K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <span className='side-line'><img src={sideLine} style={{width:"50px"}}/></span>
            <div className="stat-card pop-up-element">
              <div className="stat-icon"><img src={image3}style={{width:'50px',height:"50px"}} alt='truck image'/></div>
              <div className="stat-number" onView={handleStartCouptUp}><CountUp start={0} end={25} duration={10} separator="," startWhen={start}/>K+</div>
              <div className="stat-label">Orders Delivered</div> 
            </div>
            <span className='side-line'><img src={sideLine} style={{width:"50px"}} /></span>
            <div className="stat-card pop-up-element">
              <div className="stat-icon"><img src={image4} style={{width:'50px',height:"50px"}} alt='rating image'/></div>
              <div className="stat-number" onView={handleStartCouptUp}><CountUp start={0} end={4.9} duration={10} separator="," startWhen={start}/></div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;