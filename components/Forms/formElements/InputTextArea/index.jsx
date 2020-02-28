import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const InputTextArea = ({ name, rows = 10, label, errors, touched }) => {
  return (
    <div
      className={`border w-full border-alt-2 field-input ${
        errors?.[name] && touched?.[name] ? 'mb-10 field-error' : 'mb-4'
      }`}
    >
      <div className="px-4 py-2 relative">
        <Field
          id={name}
          name={name}
          rows={rows}
          component="textarea"
          className="w-full  field-textarea__field focus:outline-none relative z-10 bg-transparent font-light text-sm"
        />
        <label
          className="text-secondary font-light tracking-normal absolute px-4 left-0 transition-transform duration-200 ease-in z-0 field-textarea__label text-sm pt-1"
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

InputTextArea.propTypes = {
  rows: PropTypes.number,
  errors: PropTypes.object,
  touched: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputTextArea;
