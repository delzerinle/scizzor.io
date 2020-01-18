import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const InputField = ({ name, label, icon, type = 'text' }) => {
  const wrapperClass = icon
    ? 'flex border w-full border-alt-2 mb-4 form-input'
    : 'border w-full border-alt-2 mb-4 form-input';
  const inputWrapperClass = icon
    ? 'flex-1 -ml-2 px-4 relative'
    : 'px-4 relative';
  return (
    <div className={wrapperClass}>
      {icon && <div className="pl-4 flex items-center">{icon}</div>}
      <div className={inputWrapperClass}>
        <Field
          id={name}
          type={type}
          name={name}
          className="w-full py-2 form-input__field focus:outline-none relative z-10 bg-transparent font-medium"
        />
        <label
          className="text-secondary font-light tracking-normal absolute py-2 px-4 left-0 transition-all transition-ease z-0 form-input__label"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputField;
