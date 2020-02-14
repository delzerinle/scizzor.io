import PropTypes from 'prop-types';

const BrandsDesktopTitleBanner = ({ description, btnText }) => (
  <div className="px-4 py-3 border border-alt-2 shadow-custom hidden md:flex justify-between items-center">
    <p className="text-sm text-secondary leading-5 mr-4">{description}</p>

    {btnText && (
      <button className="btn-xs text-sm focus:outline-none focus:shadow-outline w-auto flex-shrink-0">
        {btnText}
      </button>
    )}
  </div>
);

BrandsDesktopTitleBanner.propTypes = {
  btnText: PropTypes.string,
  description: PropTypes.node.isRequired,
};

export default BrandsDesktopTitleBanner;
