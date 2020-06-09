import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string, ref } from 'yup';

import InputField from '../formElements/InputField';

const BrandsUpdatePasswordForm = ({ onSubmit }) => {
  const validationSchema = object().shape({
    oldPassword: string().required(),
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
        oldPassword: '',
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
        <Form className="md:max-w-md">
          <InputField
            errors={errors}
            type="password"
            touched={touched}
            name="oldPassword"
            label="Old Password"
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
            name="password"
            label="New Password"
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
            label="Re-type New Password"
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
            className="btn-sm w-full mt-1 focus:outline-none focus:shadow-outline md:w-auto"
          >
            Update Password
          </button>
        </Form>
      )}
    </Formik>
  );
};

BrandsUpdatePasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BrandsUpdatePasswordForm;
