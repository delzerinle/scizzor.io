import PropTypes from 'prop-types';

import { formatNumber } from '@helpers';

const ApparelCard = ({ name, imageSrc, className, title, btnTitle, price }) => (
  <div className={className}>
    <div>
      <img
        className="w-full h-48 mb-5 object-cover md:h-64 md:mb-3"
        src={imageSrc}
        alt="apparel"
      />
      <p
        data-testid="name"
        className="hidden md:block font-medium leading-relaxed md:mb-2"
      >
        {name}
      </p>
      <p data-testid="title" className="text-sm leading-relaxed md:mb-2">
        {title}
      </p>
      <p
        data-testid="price"
        className="text-sm leading-relaxed text-primary md:mb-2"
      >
        Starting at £{formatNumber(price)}
      </p>
      <button className="btn-alt-sm text-sm text-center mt-2">
        <span className="-mx-4">{btnTitle}</span>
      </button>
    </div>
  </div>
);

ApparelCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  btnTitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ApparelCard;
