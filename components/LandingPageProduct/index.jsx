import PropTypes from 'prop-types';

import { formatNumber } from '@helpers';

const LandingPageProduct = ({ image, title, price, className = '' }) => (
  <div
    className={`w-full h-72 bg-white border border-black px-2 py-3 ${className}`}
  >
    <img className="w-full h-40 object-cover mb-4" src={image} alt={title} />
    <p className="font-medium text-sm leading-5">{title}</p>
    <p className="text-sm text-primary">Starting at ${formatNumber(price)}</p>
    <img
      className="w-32 h-auto"
      src="/images/color-options.png"
      alt="color options"
    />
  </div>
);

LandingPageProduct.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default LandingPageProduct;
