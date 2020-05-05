import React from 'react'
import { Slide } from 'react-slideshow-image';


const slideImages = [
    'https://docs.microsoft.com/en-us/media/learn/home/hero_background_light.svg?branch=master',
    'https://i2.wp.com/blog.alexdevero.com/wp-content/uploads/2019/09/23-09-19-how-to-learn-to-code-blog.jpg?resize=768%2C476&ssl=1',
    'https://www.insidehighered.com/sites/default/server_files/media/iStock-1012331444.jpg',
    'https://i.ytimg.com/vi/X4rU02088Xc/maxresdefault.jpg'
  ];
   
const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  }
   
  function Slideshow() {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[3]})`}}></div>
            </div>
          </Slide>
        </div>
      )
  }

export default Slideshow