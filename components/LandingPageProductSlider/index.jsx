import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const LandingPageProductSlider = ({ children }) => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="pl-5 py-6 max-w-full md:hidden overflow-hidden">
      <Slider {...settings}>
        {Children.map(children, (child, i) => (
          <div
            key={i}
            className="pr-2 focus:outline-none"
            style={{ width: '14rem !important' }}
          >
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
};

LandingPageProductSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageProductSlider;
