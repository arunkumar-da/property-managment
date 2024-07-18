import React, { useState, useEffect,useRef } from 'react';
import { Carousel } from 'antd';

import SolutionStep from "./SolutionStep";
import img from '../images/property2.png';
import img1 from '../images/property1.png';
import img2 from '../images/property3.png';
import img3 from '../images/property4.png';
import './_home.css'; // Ensure your CSS file is imported for styling
import Zoom from '@mui/material/Zoom';
import ReactCardSlider from 'react-card-slider-component';
import { TypeAnimation } from 'react-type-animation';
import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'
import Footer from '../footer/Footer'
import Info  from '../information/Info';
import { motion } from "framer-motion"

const sliderClick = (index) => {
  console.log(`Clicked slide ${index + 1}`);
  // Add your custom logic for handling slide clicks here
};// a slide object contains the image link, title and function/click event for when a user clicks on a card


const slides = [
    {image: img1,title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image: img1,title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image: img1,title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image: img1,title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image: img1,title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image: img1,title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image: img1,title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image: img1,title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image: img1,title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image: img1,title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image: img1,title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image: img1,title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image: img1,title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image: img1,title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image: img1,title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    {image: img1,title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  
]

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  zIndex: 1,
  position: 'relative',
};

const textOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const text = "Framer Motion is a really cool tool".split(" ");

const App = () => {
  
  const [typingStatus, setTypingStatus] = useState('Initializing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [zoomedIn, setZoomedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [directionTinder, setDirectionTinder] = useState("swipeCornerDownRight");
  const [directionToggle, setDirectionToggle] = useState("sideSlide");
  const [directionStack, setDirectionStack] = useState("topRight");
  const [isOpen, setIsOpen] = useState(false);
  const TinderRef = useRef(null);

  const arr = [img, img1, img2, img3];
  const numbers = [0, 1, 2, 3];

  const onTinderSwipe = () => {
    if (TinderRef.current) {
      TinderRef.current.swipe();
    }
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set zoomedIn to true after a delay (e.g., 1000ms)
    const timer = setTimeout(() => {
      setZoomedIn(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  // Determine when to hide the Doctor Group image based on scroll position
  const hideDoctorGroup = scrollY > window.innerHeight * 1.5; // Adjust the multiplier as needed

  return (
    <div className="app-wrapper">
      <div className="carousel-wrapper">
        <Carousel autoplay arrows dotPosition="left" infinite effect="scrollx">
          <div>
            <div style={{ ...contentStyle }}>
            <motion.img
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} src={img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Slide 1" />
              
              <div style={{ ...textOverlayStyle }}>
                <p className='shine'>Anywhere in the World</p>
                <h1 className='pop'>
                  <span>I</span>M<span>POSSIBLE</span>
                </h1>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div style={{ ...contentStyle, background: '#4d79a3' }}>
            <motion.img
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}src={img1} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Slide 2" />
              <div style={{ ...textOverlayStyle }}>
                <p className='shine'>Another Place</p>
                <h1 className='pop'>
                  <span>Another</span> Slide
                </h1>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          {/* Add more Carousel items as needed */}
          <div>
            <div style={{ ...contentStyle, background: '#4d79a3' }}>
            <motion.img
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} src={img2} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Slide 2" />
              <div style={{ ...textOverlayStyle }}>
                <p className='shine'>Another Place</p>
                <h1 className='pop'>
                  <span>Another</span> Slide
                </h1>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div style={{ ...contentStyle, background: '#4d79a3' }}>
            <motion.img
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} src={img3} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Slide 2" />
              <div style={{ ...textOverlayStyle }}>
                <p className='shine'>Another Place</p>
                <h1 className='pop'>
                  <span>Another</span> Slide
                </h1>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          {/* Add more Carousel items as needed */}
        </Carousel>
      </div>

      <Zoom in={zoomedIn} timeout={1000}>
        <div style={{ textAlign: 'center' }}>
        <motion.h1
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 1,
      }}
      className="text-6xl font-bold mb-8 custom-margin text-gray-900"
    >All-In-One Property Management</motion.h1>
          <motion.p
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 1,
      }}className="text-2xl font-bold mb-8 custom-paragraph text-gray-900">Decisions, Your Budget: Pay Only for the Level of Support You Need</motion.p>
        </div>
      </Zoom>

      <div className="about-section" id="about">
        <div className="about-image-content">
          <div className="stacked-cards-container">
          <motion.div
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    delay: 0.2,
    x: { type: "spring", stiffness: 60 },
    opacity: { duration: 1 },
    ease: "easeIn",
    duration: 1
  }}
>
  {/* Conditionally render the Doctor Group image */}
  {!hideDoctorGroup && (
    <div className="card" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
 <motion.img
  animate={{
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  src={img} // Assuming img1 is your first image source
  alt="New Image"
  className='about-image2'
  style={{ maxWidth: '500px', maxHeight: '400px', marginLeft: '-200px' }}
/>

    </div>
  )}
</motion.div>

{hideDoctorGroup && (
  <div className="card" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
<motion.img
  animate={{
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  src={img1} // Assuming img1 is your first image source
  alt="New Image"
  className='about-image2'
  style={{ maxWidth: '500px', maxHeight: '400px', marginLeft: '-200px' }}
/>

  </div>
)}


          </div>
        </div>

        <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 1,
      }} className="about-text-content">
      

          <h3 className="about-title">
            <span>World’s Best Customer Support</span>
          </h3>
    
          <p className="about-description">
            Welcome to Health Plus, your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you.
          </p>

          <h4 className="about-text-title">Your Solutions</h4>

          <SolutionStep
            title="Choose a Specialist"
            description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
          />
        </motion.div>

      </div>

      <div className="about-section" id="about">
        <div className="about-image-content">
        <div className="stacked-cards-container">


  
  


</div>
        </div>

        <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 1,
      }} className="about-text-content">
          <h3 className="about-title">
            <span>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to Health Plus, your trusted partner for accessible and
            personalized healthcare. Our expert doctors offer online consultations
            and specialized services, prioritizing your well-being. Join us on
            this journey towards a healthier you.
          </p>

          <h4 className="about-text-title">Your Solutions</h4>

          <SolutionStep
            title="Choose a Specialist"
            description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
          />


        </motion.div>
      </div>
      <div className='why'> 
      <motion.h1
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    delay: 0.2,
    x: { type: "spring", stiffness: 60 },
    opacity: { duration: 1 },
    ease: "easeIn",
    duration: 1
  }}src className="text-6xl font-bold mb-8 custom-margin text-gray-900">Why Systemian?</motion.h1>
      
      </div>
      <div className='why'>
      <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>

</div>
<div className='why'>
<motion.p
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 1,
      }} className="about-description">
Property management involves overseeing residential, commercial, or industrial real estate on behalf of the owner<br></br> Our expert doctors offer online consultations and specialized services, prioritizing your well-being. <br></br>Join us on this journey towards a healthier you.
          </motion.p>
          </div>
      <div className='popularproperties'style={{ height: '470px'} }>
      <motion.h1
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    delay: 0.2,
    x: { type: "spring", stiffness: 60 },
    opacity: { duration: 1 },
    ease: "easeIn",
    duration: 1
  }} className="about-title" style={{ marginLeft: '70px' }}>popular properties</motion.h1>
      <div className="productslides">
        
      <ReactCardSlider  slides={slides}/>
      </div>
      </div>
     
< Info />
<Footer/>
    </div>
  );
};

export default App;
