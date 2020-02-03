import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const InputField = ({ name, label, icon, type = 'text', errors, touched }) => {
  const wrapperClass = icon
    ? `flex border w-full border-alt-2 field-input ${
        errors[name] && touched[name] ? 'mb-10 field-error' : 'mb-4'
      }`
    : `border w-full border-alt-2 field-input ${
        errors[name] && touched[name] ? 'mb-10 field-error' : 'mb-4'
      }`;

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
          className="w-full py-2 field-input__field focus:outline-none relative z-10 bg-transparent font-medium"
        />
        <label
          className="text-secondary font-light tracking-normal absolute py-2 px-4 left-0 transition-all transition-ease z-0 field-input__label text-sm pt-3"
          htmlFor={name}
        >
          {label}
        </label>
        <ErrorMessage
          name={name}
          component="p"
          className="p-sm absolute text-secondary"
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  errors: PropTypes.object,
  touched: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputField;
