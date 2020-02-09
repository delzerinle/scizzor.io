import React from 'react';
import Slider from 'react-slick';

const LandingPageProductSlider = () => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const items = Array.from({ length: 4 }).map((_x, i) => (
    <div
      key={i}
      className="pr-2 focus:outline-none"
      style={{ width: '16rem !important' }}
    >
      <img
        className="w-full focus:outline-none"
        src="/images/ProductCard.jpg"
        alt="img"
      />
    </div>
  ));

  return (
    <div className="pl-5 py-6 max-w-full md:hidden overflow-hidden">
      <Slider {...settings}>{items}</Slider>
    </div>
  );
};

export default LandingPageProductSlider;
