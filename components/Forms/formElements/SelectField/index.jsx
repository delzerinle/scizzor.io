import PropTypes from 'prop-types';

const SelectField = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    <select className="block appearance-none w-full bg-transparent border border-alt-2 text-secondary font-light text-sm rounded-none py-3 px-4 pr-8 leading-tight focus:outline-none">
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-alt-2">
      <svg className="fill-current h-3 w-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M.168 2.142l7.323 8.314a.71.71 0 001.026 0l7.319-8.314a.659.659 0 00-.072-.943L14.531.161a.685.685 0 00-.959.074L8.13 6.537a.167.167 0 01-.252 0L2.43.235a.68.68 0 00-.464-.231.667.667 0 00-.494.159L.24 1.199a.659.659 0 00-.204.717c.029.084.074.16.133.226z" />
      </svg>
    </div>
  </div>
);

SelectField.propType = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SelectField;
