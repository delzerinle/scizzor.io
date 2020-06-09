import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const SliderArrow = ({ className = '', style, onClick, position }) => {
  return (
    <div
      className={`${className} h-5 w-5 z-50`}
      style={{
        ...style,
        left: position === 'left' ? 5 : 'auto',
        right: position === 'right' ? 5 : 'auto',
      }}
      onClick={onClick}
    >
      {position === 'left' ? (
        <svg
          className="w-5 h-5 text-secondary fill-current"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="a">
            <path d="M9.8.6a.598.598 0 01-.176.424L1.648 9l7.976 7.975a.6.6 0 11-.848.849l-8.4-8.4a.6.6 0 010-.849l8.4-8.4A.6.6 0 019.8.6z" />
          </mask>
          <path d="M9.8.6a.598.598 0 01-.176.424L1.648 9l7.976 7.975a.6.6 0 11-.848.849l-8.4-8.4a.6.6 0 010-.849l8.4-8.4A.6.6 0 019.8.6z" />
          <path
            d="M9.624 1.024l2.829 2.828-2.829-2.828zM1.648 9L-1.18 6.17-4.01 9l2.829 2.828L1.648 9zm7.976 7.975l2.829-2.828-2.829 2.828zm-.848.849l2.828-2.829-2.828 2.829zm-8.4-8.4l-2.829 2.828L.376 9.424zm0-.849l-2.829-2.828L.376 8.575zm8.4-8.4l2.828 2.829L8.776.175zm.848 0l2.83-2.826-.001-.002L9.624.175zM5.8.6c0-.866.334-1.742.996-2.405l5.657 5.657A4.598 4.598 0 0013.8.6h-8zm.996-2.405L-1.18 6.171l5.657 5.657 7.976-7.976-5.657-5.657zM-1.18 11.828l7.976 7.976 5.657-5.657L4.477 6.17l-5.657 5.657zm7.976 7.976a3.4 3.4 0 010-4.809l5.657 5.657a4.6 4.6 0 000-6.505l-5.657 5.657zm0-4.809a3.4 3.4 0 014.808 0l-5.657 5.657a4.6 4.6 0 006.506 0l-5.657-5.657zm4.808 0l-8.4-8.4-5.657 5.657 8.4 8.4 5.657-5.657zm-8.4-8.4a3.4 3.4 0 010 4.809l-5.657-5.657a4.6 4.6 0 000 6.505l5.657-5.657zm0 4.809l8.4-8.4-5.657-5.657-8.4 8.4 5.657 5.657zm8.4-8.4a3.4 3.4 0 01-4.808 0l5.657-5.657a4.6 4.6 0 00-6.506 0l5.657 5.657zM6.794 3A3.401 3.401 0 015.8.6h8c0-1.173-.45-2.355-1.345-3.25L6.793 3z"
            mask="url(#a)"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-secondary fill-current transform rotate-180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="a">
            <path d="M9.8.6a.598.598 0 01-.176.424L1.648 9l7.976 7.975a.6.6 0 11-.848.849l-8.4-8.4a.6.6 0 010-.849l8.4-8.4A.6.6 0 019.8.6z" />
          </mask>
          <path d="M9.8.6a.598.598 0 01-.176.424L1.648 9l7.976 7.975a.6.6 0 11-.848.849l-8.4-8.4a.6.6 0 010-.849l8.4-8.4A.6.6 0 019.8.6z" />
          <path
            d="M9.624 1.024l2.829 2.828-2.829-2.828zM1.648 9L-1.18 6.17-4.01 9l2.829 2.828L1.648 9zm7.976 7.975l2.829-2.828-2.829 2.828zm-.848.849l2.828-2.829-2.828 2.829zm-8.4-8.4l-2.829 2.828L.376 9.424zm0-.849l-2.829-2.828L.376 8.575zm8.4-8.4l2.828 2.829L8.776.175zm.848 0l2.83-2.826-.001-.002L9.624.175zM5.8.6c0-.866.334-1.742.996-2.405l5.657 5.657A4.598 4.598 0 0013.8.6h-8zm.996-2.405L-1.18 6.171l5.657 5.657 7.976-7.976-5.657-5.657zM-1.18 11.828l7.976 7.976 5.657-5.657L4.477 6.17l-5.657 5.657zm7.976 7.976a3.4 3.4 0 010-4.809l5.657 5.657a4.6 4.6 0 000-6.505l-5.657 5.657zm0-4.809a3.4 3.4 0 014.808 0l-5.657 5.657a4.6 4.6 0 006.506 0l-5.657-5.657zm4.808 0l-8.4-8.4-5.657 5.657 8.4 8.4 5.657-5.657zm-8.4-8.4a3.4 3.4 0 010 4.809l-5.657-5.657a4.6 4.6 0 000 6.505l5.657-5.657zm0 4.809l8.4-8.4-5.657-5.657-8.4 8.4 5.657 5.657zm8.4-8.4a3.4 3.4 0 01-4.808 0l5.657-5.657a4.6 4.6 0 00-6.506 0l5.657 5.657zM6.794 3A3.401 3.401 0 015.8.6h8c0-1.173-.45-2.355-1.345-3.25L6.793 3z"
            mask="url(#a)"
          />
        </svg>
      )}
    </div>
  );
};

const MeasurementsSlider = ({ children }) => {
  const settings = {
    dots: false,
    slidesToShow: 2,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: <SliderArrow position="right" />,
    prevArrow: <SliderArrow position="left" />,
    className: 'measurement-slider w-full',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full overflow-hidden">
      <Slider {...settings}>
        {Children.map(children, (child, i) => (
          <div key={i} className="w-full focus:outline-none">
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
};

MeasurementsSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MeasurementsSlider;
