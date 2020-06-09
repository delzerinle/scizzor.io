import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const BrandsTitleBanner = ({ title, btnText, description, className = '' }) => {
  const router = useRouter();

  return (
    <div
      className={`px-5 py-8 bg-tertiary text-center md:px-12 md:text-left ${className}`}
    >
      {title && <h4 className="leading-relaxed mb-1 md:text-3xl">{title}</h4>}
      <p className="text-sm mb-3 leading-6">{description}</p>
      {btnText && (
        <button
          type="button"
          onClick={() => router.push('/brands/outfits/add')}
          className="btn-sm text-sm focus:outline-none focus:shadow-outline"
        >
          {btnText}
        </button>
      )}
    </div>
  );
};

BrandsTitleBanner.propTypes = {
  title: PropTypes.node,
  btnText: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.node.isRequired,
};

export default BrandsTitleBanner;
