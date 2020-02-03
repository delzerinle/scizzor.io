import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string, ref } from 'yup';

import InputField from '../formElements/InputField';

const BrandSignUpForm = ({ onSubmit }) => {
  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    brandName: string().required(),
    email: string()
      .email()
      .required(),
    phoneNumber: string()
      .matches(/^[0-9]{9,11}$/, 'invalid phone number format')
      .required(),
    password: string()
      .min(8)
      .required(),
    confirmPassword: string()
      .oneOf([ref('password'), null], 'passwords do not match')
      .required(),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        brandName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-8">
          <div className="md:flex md:justify-between md:justify-start">
            <div className="md:flex-1 md:mr-5">
              <InputField
                errors={errors}
                name="firstName"
                touched={touched}
                label="First Name"
              />
            </div>
            <div className="md:flex-1">
              <InputField
                errors={errors}
                name="lastName"
                touched={touched}
                label="Last Name"
              />
            </div>
          </div>
          <InputField
            errors={errors}
            name="brandName"
            touched={touched}
            label="Brand Name"
          />
          <InputField
            name="email"
            errors={errors}
            touched={touched}
            label="Email Address"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.063 8a3.063 3.063 0 11-6.126 0 3.063 3.063 0 016.125 0z"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.063 8v1.313a1.75 1.75 0 103.5 0V8a6.562 6.562 0 10-2.626 5.25"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <InputField
            errors={errors}
            touched={touched}
            name="phoneNumber"
            label="Phone Number"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.053 5.812l.844.844a2.34 2.34 0 003.31 0l1.24-1.24a1.17 1.17 0 000-1.655L4.035 1.347a1.172 1.172 0 00-1.765.115c-2.527 3.434-.997 7.052 2.11 10.159 3.108 3.107 6.725 4.638 10.16 2.11a1.172 1.172 0 00.114-1.765L12.24 9.552a1.17 1.17 0 00-1.655 0l-1.241 1.242a2.34 2.34 0 000 3.31l.853.853"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <InputField
            name="password"
            type="password"
            errors={errors}
            touched={touched}
            label="Create Password"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.438 8.438H2.311a.875.875 0 01-.874-.876v-5.25a.875.875 0 01.875-.874h10.5a.875.875 0 01.874.875v3.5"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.063 4.719a.219.219 0 110 .437.219.219 0 010-.437M7.563 4.719a.219.219 0 110 .437.219.219 0 010-.437M11.063 4.719a.218.218 0 110 .436.218.218 0 010-.436M13.688 10.188h-3.5a.875.875 0 00-.876.874v2.626c0 .483.392.874.876.874h3.5a.875.875 0 00.874-.874v-2.626a.875.875 0 00-.874-.874zM11.938 7.563a1.75 1.75 0 00-1.75 1.75v.874h3.5v-.874a1.75 1.75 0 00-1.75-1.75z"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.938 12.173a.218.218 0 01.214.262.218.218 0 11-.214-.262"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <InputField
            errors={errors}
            type="password"
            touched={touched}
            name="confirmPassword"
            label="Re-type Password"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.438 8.438H2.311a.875.875 0 01-.874-.876v-5.25a.875.875 0 01.875-.874h10.5a.875.875 0 01.874.875v3.5"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.063 4.719a.219.219 0 110 .437.219.219 0 010-.437M7.563 4.719a.219.219 0 110 .437.219.219 0 010-.437M11.063 4.719a.218.218 0 110 .436.218.218 0 010-.436M13.688 10.188h-3.5a.875.875 0 00-.876.874v2.626c0 .483.392.874.876.874h3.5a.875.875 0 00.874-.874v-2.626a.875.875 0 00-.874-.874zM11.938 7.563a1.75 1.75 0 00-1.75 1.75v.874h3.5v-.874a1.75 1.75 0 00-1.75-1.75z"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.938 12.173a.218.218 0 01.214.262.218.218 0 11-.214-.262"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-sm w-full mt-8 md:mt-2 focus:outline-none focus:shadow-outline"
          >
            Create account
          </button>
        </Form>
      )}
    </Formik>
  );
};

BrandSignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BrandSignUpForm;
