import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const LandingPageCustomerCTA = ({ className = '' }) => {
  const router = useRouter();
  return (
    <div className={`px-5 bg-tertiary text-center pt-6 pb-8 ${className}`}>
      <h4>Experience Bespoke Done Better</h4>
      <p className="text-sm leading-6 text-secondary mt-2 mb-4 px-2 md:px-0">
        Experience Bespoke Fashion Enhanced By Machine Learning, Measurement
        Technology & Made-To-Measure Specialists.
      </p>
      <button
        type="button"
        onClick={() => router.push('/customers/register')}
        className="btn-sm text-sm focus:outline-none focus:shadow-outline"
      >
        Get Started
      </button>
    </div>
  );
};

LandingPageCustomerCTA.propTypes = {
  className: PropTypes.string,
};

export default LandingPageCustomerCTA;
