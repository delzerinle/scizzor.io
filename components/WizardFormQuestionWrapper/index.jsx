import PropTypes from 'prop-types';

const WizardFormQuestionWrapper = ({ children, title, description }) => {
  return (
    <div className="mt-8">
      <h4 data-testid="title" className="text-center">
        {title}
      </h4>
      <p
        data-testid="description"
        className="text-center text-secondary text-sm mx-auto max-w-xs leading-6 mt-4"
      >
        {description}
      </p>
      {children}
    </div>
  );
};

WizardFormQuestionWrapper.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default WizardFormQuestionWrapper;
