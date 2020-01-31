import PropTypes from 'prop-types';
import { Field } from 'formik';

const CheckboxField = ({ name, label, errors, touched, value, className }) => (
  <div className={className}>
    <Field name={name}>
      {({ field, form }) => (
        <input
          id={value}
          {...field}
          type="checkbox"
          checked={field.value === value}
          onChange={() => {
            field.onChange(field.name)(value);
            form.setFieldTouched(field.name, true);
          }}
          className="form-checkbox text-primary h-5 w-5 mr-3"
        />
      )}
    </Field>
    <label className="font-light text-sm" htmlFor={value}>
      {label}
    </label>
  </div>
);

CheckboxField.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
