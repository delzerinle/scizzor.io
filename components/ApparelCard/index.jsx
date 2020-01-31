import PropTypes from 'prop-types';

const ApparelCard = ({ imageSrc, className }) => (
  <div className={className}>
    <div>
      <img
        className="w-full h-48 mb-6 object-cover md:h-64"
        src={imageSrc}
        alt="apparel"
      />
      <p className="text-sm leading-relaxed">Classic Fit Stretch Plaid</p>
      <p className="text-sm leading-relaxed">Wool Suit</p>
      <p className="text-sm leading-relaxed text-primary">Starting at £400</p>
      <button className="btn-alt-sm text-sm text-center mt-2">
        View & Edit
      </button>
    </div>
  </div>
);

ApparelCard.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
};

export default ApparelCard;
