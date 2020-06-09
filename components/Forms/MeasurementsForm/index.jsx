import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import InputFieldWithoutLabel from '../formElements/InputFieldWithoutLabel';

const MeasurementsForm = ({ children }) => {
  const validationSchema = object().shape({
    appointment: object()
      .shape({
        date: string().required(),
        time: string().required(),
      })
      .required(),
    contact: object()
      .shape({
        email: string()
          .email()
          .required(),
        phone: string()
          .matches(/^[0-9]{9,11}$/, 'invalid phone number format')
          .required(),
        address: string().required(),
      })
      .required(),
    measurements: object()
      .shape({
        neck: string().required(),
        shoulder: string().required(),
        chest: string().required(),
        waist: string().required(),
        wrist: string().required(),
        thigh: string().required(),
        ankle: string().required(),
        topLength: string().required(),
        bottomLength: string().required(),
      })
      .required(),
  });
  return (
    <Formik
      initialValues={{
        appointment: {
          date: '',
          time: '',
        },
        contact: {
          email: '',
          phone: '',
          address: '',
        },
        measurements: {
          neck: '',
          shoulder: '',
          chest: '',
          waist: '',
          wrist: '',
          thigh: '',
          ankle: '',
          topLength: '',
          bottomLength: '',
        },
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="lg:mx-auto lg:w-11/12">
          <div className="lg:flex lg:flex-wrap lg:w-full lg:-mx-2">
            <div className="lg:w-2/5 lg:px-2">
              <div className="border border-alt-2 p-4 lg:py-2">
                <div className="flex justify-between items-end pb-4">
                  <div>
                    <p className="text-xs font-medium text-secondary">
                      Customer Name
                    </p>
                    <p className="font-medium">Alex Erinle</p>
                  </div>
                  <p>Male</p>
                </div>

                <div className="pb-4 lg:pb-2">
                  <p className="text-xs font-medium text-secondary mb-2">
                    Appointment Details
                  </p>
                  <InputFieldWithoutLabel
                    errors={errors}
                    touched={touched}
                    name="appointment.date"
                    label="Date"
                    icon={
                      <svg
                        className="w-5 h-4 -ml-1 stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.113 2.5H1.668c-.613 0-1.11.448-1.11 1v11c0 .552.497 1 1.11 1h14.445c.613 0 1.11-.448 1.11-1v-11c0-.552-.497-1-1.11-1zM.557 6.5h16.667M5.002 4V.5M12.78 4V.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />

                  <InputFieldWithoutLabel
                    errors={errors}
                    touched={touched}
                    name="appointment.time"
                    label="Time"
                    icon={
                      <svg
                        className="w-5 h-5 -ml-1 mt-1 stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 15.938a7.438 7.438 0 100-14.876 7.438 7.438 0 000 14.876zM8.5 8.5V5.844M8.5 8.5l3.32 3.32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>

                <div className="pb-4 lg:pb-0">
                  <p className="text-xs font-medium text-secondary mb-2">
                    Contact Details
                  </p>
                  <InputFieldWithoutLabel
                    errors={errors}
                    touched={touched}
                    name="contact.email"
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

                  <InputFieldWithoutLabel
                    errors={errors}
                    touched={touched}
                    name="contact.phone"
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

                  <InputFieldWithoutLabel
                    errors={errors}
                    touched={touched}
                    name="contact.address"
                    label="Address"
                    icon={
                      <svg
                        className="w-5 h-5 -ml-1 mt-1 stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 10.3a.25.25 0 01.049.494.25.25 0 11-.049-.495z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 7.55a3 3 0 013 3c0 1.28-1.792 3.717-2.606 4.758a.501.501 0 01-.788 0c-.814-1.041-2.606-3.478-2.606-4.759a3 3 0 013-3zM10.499 15.355a7.503 7.503 0 115.846-8.88"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.193 15.28C6.178 13.794 5.5 11.09 5.5 8c0-3.089.678-5.792 1.693-7.28M1.517 7.5H9.5M3 3.5h12M2.365 11.5H8.5M10.807.72a11.36 11.36 0 011.54 4.783"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
              {children}
            </div>

            <div className="lg:w-3/5 lg:px-2">
              <div className="border border-alt-2 p-4">
                <p className="font-medium -m-4 mb-0 p-4 bg-gray-100 lg:mb-10 lg:flex lg:items-center lg:justify-between">
                  Customer Measurements
                  <span className="hidden text-sm font-light text-secondary lg:block">
                    Status:{' '}
                    <span className="text-green-600 ml-2">Approved</span>
                  </span>
                </p>

                <p className="text-sm py-5 text-secondary lg:hidden">
                  Status: <span className="text-green-600 ml-2">Approved</span>
                </p>

                <InputFieldWithoutLabel
                  label="Neck"
                  errors={errors}
                  touched={touched}
                  name="measurements.neck"
                />

                <InputFieldWithoutLabel
                  label="Shoulder"
                  errors={errors}
                  touched={touched}
                  name="measurements.shoulder"
                />

                <InputFieldWithoutLabel
                  label="Chest"
                  errors={errors}
                  touched={touched}
                  name="measurements.chest"
                />

                <InputFieldWithoutLabel
                  label="Waist"
                  errors={errors}
                  touched={touched}
                  name="measurements.waist"
                />

                <InputFieldWithoutLabel
                  label="Wrist"
                  errors={errors}
                  touched={touched}
                  name="measurements.wrist"
                />

                <InputFieldWithoutLabel
                  label="Thigh"
                  errors={errors}
                  touched={touched}
                  name="measurements.thigh"
                />

                <InputFieldWithoutLabel
                  errors={errors}
                  touched={touched}
                  label="Top Length"
                  name="measurements.topLength"
                />

                <InputFieldWithoutLabel
                  errors={errors}
                  touched={touched}
                  label="Bottom Length"
                  name="measurements.bottomLength"
                />
              </div>

              <div className="lg:text-right lg:p-4 lg:border lg:border-alt-2 lg:border-t-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-sm w-full mt-10 md:mt-2 focus:outline-none focus:shadow-outline lg:w-auto lg:mt-0"
                >
                  Save Measurements
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MeasurementsForm;
