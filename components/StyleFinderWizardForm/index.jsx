import React, { Children, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Formik, Form } from 'formik';

const StyleFinderWizardForm = ({
  onSubmit,
  children,
  initialValues,
  validationSchema,
  onSubmitBtnClick,
  currentSlideIndex,
  setCurrentSlideIndex,
}) => {
  const slickSlider = useRef(null);
  const slidesCount = Children.count(children);
  const progressPercentage = Math.floor(
    ((currentSlideIndex + 1) / slidesCount) * 100
  );

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
    // accessibility: false,
    // className: 'wizard-slider w-full',
    beforeChange: (_, next) => setCurrentSlideIndex(next),
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
        <Form
          style={{ backgroundImage: 'url(/images/how-scizzor-works.jpg)' }}
          className="p-5 bg-cover bg-center bg-no-repeat"
        >
          <div className="bg-white px-5 pb-12 md:pb-16">
            <div className="-mx-5 relative h-5 mb-12 md:h-3">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="h-full bg-primary absolute left-0 transition-all duration-500 ease-in-out max-w-full"
              />
              <p className="text-xs pl-5 pt-5">
                {progressPercentage}% Completed
              </p>
            </div>
            <Slider ref={slickSlider} {...settings}>
              {Children.map(children, child => (
                <div className="w-full focus:outline-none">{child}</div>
              ))}
            </Slider>
            <div className="md:max-w-md md:mx-auto">
              <button
                type="button"
                disabled={formikBag.isSubmitting}
                onClick={() => onSubmitBtnClick(formikBag, slickSlider)}
                className=" btn-sm w-full mt-8 focus:outline-none focus:shadow-outline"
              >
                {currentSlideIndex === 0 ? 'Get Started' : 'Next'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

StyleFinderWizardForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.any.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmitBtnClick: PropTypes.func.isRequired,
  currentSlideIndex: PropTypes.number.isRequired,
  setCurrentSlideIndex: PropTypes.func.isRequired,
};

export default StyleFinderWizardForm;
