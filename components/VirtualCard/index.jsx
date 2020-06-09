import PropTypes from 'prop-types';

const CardDots = ({ className = '' }) => (
  <ul className={`flex items-center ${className}`}>
    {Array.from({ length: 4 }, (_, i) => (
      <li key={i}>
        <div
          className={`w-2 h-2 bg-alt-1 rounded-full ${i === 3 ? '' : 'mr-1'}`}
        />
      </li>
    ))}
  </ul>
);

const VirtualCard = ({ cvv, expiryDate, className = '' }) => {
  return (
    <div className={`border border-alt-1 p-4 ${className}`}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <svg
            className="h-5 w-16 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24.802 18.274H20.33l2.798-17.3H27.6l-2.798 17.3zM41.02 1.396c-.883-.35-2.283-.736-4.013-.736-4.418 0-7.529 2.355-7.548 5.723-.036 2.485 2.228 3.865 3.92 4.694 1.732.847 2.32 1.4 2.32 2.154-.018 1.159-1.399 1.693-2.687 1.693-1.786 0-2.742-.275-4.197-.92l-.589-.276-.626 3.883c1.05.478 2.982.902 4.99.921 4.693 0 7.749-2.32 7.785-5.908.018-1.97-1.177-3.479-3.755-4.712-1.564-.792-2.523-1.326-2.523-2.135.019-.737.81-1.491 2.577-1.491 1.454-.037 2.523.313 3.332.662l.405.184.608-3.736zM46.965 12.145c.368-.994 1.786-4.84 1.786-4.84-.019.036.367-1.013.588-1.657l.313 1.49s.847 4.142 1.031 5.007h-3.718zM52.487.973h-3.46c-1.068 0-1.878.313-2.339 1.436l-6.645 15.865h4.694l.94-2.595h5.743c.128.607.533 2.595.533 2.595h4.143l-3.61-17.3zM16.593.973L12.21 12.771l-.478-2.393c-.81-2.76-3.35-5.76-6.185-7.252l4.013 15.13h4.73L21.323.973h-4.73z" />
            <path d="M8.143.973H.946l-.074.35c5.615 1.435 9.333 4.896 10.86 9.056l-1.564-7.952C9.911 1.322 9.118 1.01 8.143.973z" />
          </svg>
        </div>
        <div className="flex items-center">
          <CardDots />
          <CardDots className="mx-4" />
          <CardDots />
        </div>
        <p data-testid="cvv" className="text-sm font-medium">
          {cvv}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p data-testid="expiryDate" className="text-sm font-medium">
          Expires {expiryDate}
        </p>
        <button>
          <span className="text-sm font-medium text-red-500">Remove Card</span>
        </button>
      </div>
    </div>
  );
};

VirtualCard.propTypes = {
  className: PropTypes.string,
  cvv: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
};

export default VirtualCard;
