import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import InputFieldWithoutLabel from '../formElements/InputFieldWithoutLabel';

const NewsletterSubscriptionForm = () => {
  const validationSchema = object().shape({
    email: string()
      .email()
      .required(),
  });

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="bg-tertiary p-5 md:relative md:p-10">
          <div
            className="hidden md:block md:absolute md:bg-cover md:bg-no-repeat md:bg-center md:top-0 md:left-0 md:w-full md:h-full md:z-0"
            style={{
              backgroundImage: 'url(/images/brands-signup.jpg)',
            }}
          />
          <div className="md:relative md:z-10 md:max-w-xl">
            <h4 className="text-2xl mb-2 md:max-w-md">
              Subscribe to the Newsletter
            </h4>
            <p className="text-sm leading-6 mb-3 md:max-w-sm">
              Subscribe to the Scizzor newsletter to get access to the latest
              outfits from Scizzor
            </p>

            <div className="md:flex md:items-start md:justify-between">
              <InputFieldWithoutLabel
                name="email"
                errors={errors}
                touched={touched}
                fieldClassName="border-black bg-transparent md:bg-white"
                label="Enter your email here"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-xs w-full mt-2 md:mt-0 focus:outline-none focus:shadow-outline md:ml-5 md:h-10 md:w-88"
              >
                Subscribe
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewsletterSubscriptionForm;
