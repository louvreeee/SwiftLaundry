import React, { useState, useEffect } from 'react';
import DesktopNavBar from './Component/DesktopNavBar';
import './App.css';


function App() {
  // State to hold window dimensions
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect to update window dimensions on resize
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add an event listener to track window size changes
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 // Calculate the image dimensions as percentages of the window size
 const imageWidthPercentage = 100; // Adjust as needed
 const imageHeightPercentage = 100; // Adjust as needed

 // Style object to set the image's dimensions
 const imgStyle = {
   width: `${imageWidthPercentage}%`,
   height: `${imageHeightPercentage}vh`, // Use viewport height for responsive height
 };



  return (
 <div className="App">
      <DesktopNavBar />
      <div className="content ">
        <div id='home'>
          <img src='./home-image.jpg' alt="Home" 
          style={imgStyle}
          />
          <div className='home-container'>
          <p>Your text content here</p>
          </div>
          {/* Add any other content or components specific to the "home" section */}
        </div>
        {/* Add other sections here */}
      </div>
    </div>
  );
}

export default App;
