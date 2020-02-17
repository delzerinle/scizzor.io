import PropTypes from 'prop-types';

const AccordionSection = ({ onClick, label, isOpen, children }) => {
  return (
    <div className="mb-4">
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-sm font-medium">{label}</p>
        <svg
          className="w-4 h-4 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 1v10M11 6H1"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
};

AccordionSection.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccordionSection;
