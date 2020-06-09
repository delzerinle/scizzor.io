import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import { object, string, bool } from 'yup';

import InputField from '../formElements/InputField';
import RadioField from '../formElements/RadioField';

const CustomerAddressBookForm = ({ onSubmit }) => {
  const validationSchema = object().shape({
    streetAddress: string().required(),
    apartment: string().required(),
    city: string().required(),
    county: string().required(),
    postcode: string().required(),
    primaryAddress: bool().required(),
  });
  return (
    <Formik
      initialValues={{
        streetAddress: '',
        apartment: '',
        city: '',
        county: '',
        postcode: '',
        primaryAddress: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-6">
          <InputField
            errors={errors}
            name="streetAddress"
            touched={touched}
            label="Street Address"
          />

          <InputField
            errors={errors}
            name="apartment"
            touched={touched}
            label="Apartment/Suite"
          />

          <div className="md:flex md:justify-between md:justify-start">
            <div className="md:flex-1 md:mr-5">
              <InputField
                errors={errors}
                name="city"
                touched={touched}
                label="City"
              />
            </div>
            <div className="md:flex-1">
              <InputField
                errors={errors}
                name="county"
                touched={touched}
                label="County"
              />
            </div>
          </div>

          <InputField
            errors={errors}
            name="postcode"
            touched={touched}
            label="Postcode"
          />

          <div className="mt-6">
            <RadioField
              errors={errors}
              touched={touched}
              name="primaryAddress"
              label="Set as Primary Address"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-sm w-full mt-8 md:mt-4 focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

CustomerAddressBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CustomerAddressBookForm;
