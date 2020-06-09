import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const InputFieldWithoutLabel = ({
  name,
  label,
  icon,
  type = 'text',
  errors,
  touched,
  fieldClassName = 'border-alt-2',
}) => {
  const [parentKey, childKey] = name.split('.');

  const wrapperClass = icon
    ? `flex border w-full ${fieldClassName} field-input ${
        errors?.[parentKey]?.[childKey] && touched?.[parentKey]?.[childKey]
          ? 'mb-10 field-error'
          : 'mb-4'
      }`
    : `border w-full ${fieldClassName} field-input ${
        errors?.[parentKey]?.[childKey] && touched?.[parentKey]?.[childKey]
          ? 'mb-10 field-error'
          : 'mb-4'
      }`;

  const inputWrapperClass = icon
    ? 'flex-1 px-4 py-2 relative -ml-4'
    : 'px-4 py-2 relative';

  return (
    <div className={wrapperClass}>
      {icon && <div className="px-4 flex items-center">{icon}</div>}
      <div className={inputWrapperClass}>
        <Field
          id={name}
          type={type}
          name={name}
          placeholder={label}
          className="w-full focus:outline-none font-light text-sm placeholder-secondary bg-transparent"
        />
        <ErrorMessage
          name={name}
          component="p"
          className="p-sm absolute text-secondary pt-2"
        />
      </div>
    </div>
  );
};

InputFieldWithoutLabel.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  errors: PropTypes.object,
  touched: PropTypes.object,
  fieldClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputFieldWithoutLabel;
