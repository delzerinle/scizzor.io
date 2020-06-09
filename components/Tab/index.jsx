import PropTypes from 'prop-types';

const Tab = ({ label, onClick, activeTab, className, activeClass }) => (
  <li
    className={`cursor-pointer text-sm relative ${className} ${
      activeTab === label ? `active-tab ${activeClass}` : ''
    }`}
    onClick={onClick}
  >
    {label}
  </li>
);

Tab.propTypes = {
  className: PropTypes.string,
  activeClass: PropTypes.string,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.node.isRequired,
};

export default Tab;
