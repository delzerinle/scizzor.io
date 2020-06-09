import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string, number } from 'yup';

import InputField from '../formElements/InputField';

const CustomerPaymentInfoForm = ({ onSubmit }) => {
  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    cardNumber: number().required(),
    expiryDate: string().required(),
    cvv: number().required(),
    streetAddress: string().required(),
    apartment: string().required(),
    city: string().required(),
    county: string().required(),
    postcode: string().required(),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        streetAddress: '',
        apartment: '',
        city: '',
        county: '',
        postcode: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-6">
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
            name="cardNumber"
            touched={touched}
            label="Card Number"
          />
          <div className="flex justify-between justify-start">
            <div className="flex-1 mr-2 md:mr-5">
              <InputField
                errors={errors}
                name="expiryDate"
                touched={touched}
                label="Card Expiry Date"
              />
            </div>
            <div className="flex-1">
              <InputField
                errors={errors}
                name="cvv"
                touched={touched}
                label="CVV"
              />
            </div>
          </div>
          <p className="text-sm mb-2">Billing Address</p>
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

          <p className="text-sm leading-6">
            By clicking the button below you authorize Scizzor to charge this
            payment method if your preferred method of payment cannot be
            charged.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-sm w-full mt-8 md:mt-4 focus:outline-none focus:shadow-outline"
          >
            Add Payment Method
          </button>
        </Form>
      )}
    </Formik>
  );
};

CustomerPaymentInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CustomerPaymentInfoForm;
