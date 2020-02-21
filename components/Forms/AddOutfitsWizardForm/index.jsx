import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Formik, Form } from 'formik';

const AddOutfitsWizardForm = ({
  title,
  children,
  onSubmit,
  initialValues,
  validationSchema,
}) => {
  const slidesCount = Children.count(children);
  const settings = {
    dots: false,
    swipe: false,
    arrows: false,
    infinite: false,
    draggable: false,
    adaptiveHeight: true,
    accessibility: false,
    className: 'wizard-slider w-full',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="md:flex md:justify-between md:items-center">
            <p
              data-testid="title"
              className="font-medium md:w-40 md:flex-shrink-0"
            >
              {title}
            </p>

            <div className="md:flex-1 md:flex md:justify-between md:items-center">
              <ul
                id="wizard-form"
                className="relative mt-4 inline-flex w-full justify-around md:mt-0 lg:ml-32"
              >
                {Array.from({ length: slidesCount }).map((_, i) => {
                  const ClassList = 'text-secondary bg-white border-alt-2';
                  const completedClassList =
                    'text-white bg-primary border-primary';

                  return (
                    <li key={i}>
                      <button
                        type="button"
                        className={`text-sm border rounded-full h-6 w-6 flex justify-center items-center relative z-10 focus:outline-none focus:shadow-outline focus:border-primary hover:border-primary hover:shadow-outline ${
                          i === 0 ? completedClassList : ClassList
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <button
                type="submit"
                disabled={isSubmitting}
                className="hidden btn-sm w-auto focus:outline-none focus:shadow-outline md:block md:ml-6 lg:ml-24"
              >
                Next
              </button>
            </div>
          </div>

          <div>
            <Slider {...settings}>
              {Children.map(children, child => (
                <div className="w-full focus:outline-none">{child}</div>
              ))}
            </Slider>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-sm w-full mt-8 md:mt-2 focus:outline-none focus:shadow-outline md:hidden"
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

AddOutfitsWizardForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.any.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default AddOutfitsWizardForm;
