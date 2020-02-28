import React, { Children, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Formik, Form } from 'formik';

const AddOutfitsWizardForm = ({
  title,
  onSubmit,
  children,
  initialValues,
  goToSlideIndex,
  validationSchema,
  onSubmitBtnClick,
  maxCompletedSlide,
  setCurrentSlideIndex,
  setMaxCompletedSlide,
}) => {
  const slickSlider = useRef(null);
  const slidesCount = Children.count(children);
  const settings = {
    dots: false,
    swipe: false,
    arrows: false,
    lazyLoad: true,
    slidesToShow: 1,
    infinite: false,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility: false,
    className: 'wizard-slider w-full',
    beforeChange: (_, next) => {
      setCurrentSlideIndex(next);
      next > maxCompletedSlide && setMaxCompletedSlide(next);
    },
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
      {formikBag => (
        <Form className="flex-1 flex flex-col">
          <div className="flex-shrink-0 md:flex md:justify-between md:items-center">
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
                  const classList =
                    'text-secondary bg-white border-alt-2 cursor-not-allowed focus:outline-none';
                  const completedClassList =
                    'text-white bg-primary border-primary focus:outline-none focus:shadow-outline focus:border-primary';

                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() =>
                          i <= maxCompletedSlide &&
                          goToSlideIndex(i, slickSlider)
                        }
                        className={`text-sm border rounded-full h-6 w-6 flex justify-center items-center relative z-10  hover:border-primary hover:shadow-outline ${
                          i <= maxCompletedSlide
                            ? completedClassList
                            : classList
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                disabled={formikBag.isSubmitting}
                onClick={() => onSubmitBtnClick(formikBag, slickSlider)}
                className="hidden btn-sm w-auto focus:outline-none focus:shadow-outline md:block md:ml-6 lg:ml-24"
              >
                Next
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex-shrink-0">
              <Slider ref={slickSlider} {...settings}>
                {Children.map(children, child => (
                  <div className="w-full focus:outline-none">{child}</div>
                ))}
              </Slider>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <button
                type="button"
                disabled={formikBag.isSubmitting}
                onClick={() => onSubmitBtnClick(formikBag, slickSlider)}
                className=" btn-sm w-full mt-8 md:mt-2 focus:outline-none focus:shadow-outline md:hidden"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

AddOutfitsWizardForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToSlideIndex: PropTypes.func.isRequired,
  validationSchema: PropTypes.any.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmitBtnClick: PropTypes.func.isRequired,
  maxCompletedSlide: PropTypes.number.isRequired,
  setCurrentSlideIndex: PropTypes.func.isRequired,
  setMaxCompletedSlide: PropTypes.func.isRequired,
};

export default AddOutfitsWizardForm;
