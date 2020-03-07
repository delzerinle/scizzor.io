import PropTypes from 'prop-types';
import { Field } from 'formik';

const RadioField = ({ name, label, className }) => {
  return (
    <div className={className}>
      <Field name={name}>
        {({ field, form }) => (
          <input
            id={name}
            {...field}
            type="checkbox"
            checked={field.value}
            onChange={() => {
              form.setFieldValue(field.name, !field.value);
              form.setFieldTouched(field.name, true);
            }}
            className="form-checkbox text-primary h-5 w-5 mr-3"
          />
        )}
      </Field>
      <label className="font-medium text-sm" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

RadioField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioField;
