import React from 'react';
import { MainCarouselData } from './MainCarouselData'; // Corrected import name
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel= () => {
  const items = MainCarouselData.map((item) => (
    <img
      key={item.path} // Added key prop for React list rendering
      className='cursor-pointer -z-10'
      role='presentation'
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls // Simplified syntax for boolean props
      autoPlay
      autoPlayInterval={1000} // Corrected camelCase for autoPlayInterval
      infinite
    />
  );
};

export default MainCarousel;