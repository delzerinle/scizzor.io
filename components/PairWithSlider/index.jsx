import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const PairWithSlider = ({ children }) => {
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
    <>
      <hr className="mx-5 border-t border-alt-2 md:hidden" />
      <div className="px-5 pt-5 pb-10 max-w-full md:hidden overflow-hidden">
        <p className="font-medium mb-5">Pair it with</p>
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
    </>
  );
};

PairWithSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PairWithSlider;
