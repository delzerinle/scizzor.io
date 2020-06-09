import PropTypes from 'prop-types';

import { formatNumber } from '@helpers';

const PairWithItem = ({ image, name, description, price }) => (
  <div className="w-full">
    <img className="w-full h-48 object-cover mb-4" src={image} alt={name} />
    <p data-testid="name" className="text-sm font-medium leading-6">
      {name}
    </p>
    <p data-testid="description" className="text-sm leading-6">
      {description}
    </p>
    <p data-testid="price" className="text-primary text-sm leading-6">
      £{formatNumber(price)}
    </p>
  </div>
);

PairWithItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PairWithItem;
