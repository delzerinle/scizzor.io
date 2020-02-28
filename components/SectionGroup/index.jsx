import PropTypes from 'prop-types';

const SectionGroup = ({ title, children }) => {
  return (
    <div className="border border-alt-2 px-4 py-2">
      <p
        data-testid="title"
        className="font-medium -mx-4 -my-2 mb-0 px-4 py-2 bg-gray-100"
      >
        {title}
      </p>
      <div className="pt-6 pb-4">{children}</div>
    </div>
  );
};

SectionGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionGroup;
