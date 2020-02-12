import PropTypes from 'prop-types';

const BrandDashboardCounter = ({ title, count, className = '' }) => (
  <div className={className}>
    <p data-testid="title" className="text-xs text-secondary mb-1">
      {title}
    </p>
    <p data-testid="count" className="text-2xl font-medium">
      {count}
    </p>
  </div>
);

BrandDashboardCounter.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default BrandDashboardCounter;
