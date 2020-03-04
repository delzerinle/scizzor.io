import PropTypes from 'prop-types';

const CustomersTitleBanner = ({ title }) => {
  return (
    <div className="px-5 py-12 bg-tertiary text-center md:py-16">
      <h4 className="leading-relaxed">{title}</h4>
    </div>
  );
};

CustomersTitleBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomersTitleBanner;
