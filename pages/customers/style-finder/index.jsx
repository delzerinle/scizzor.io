import React, { useState } from 'react';
import { object, string, number } from 'yup';
import InputRange from 'react-input-range';

import {
  SEO,
  ImageSelect,
  CustomersLayout,
  StyleFinderWizardForm,
  WizardFormQuestionWrapper,
} from '@components';
import InputField from '@components/Forms/formElements/InputField';
import { formatNumber } from '@helpers';

const StyleFinder = () => {
  const sliderLength = 5;
  const [price, setPrice] = useState({ min: 3000, max: 8000 });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSubmitBtnClick = (formikBag, slickRef) => {
    // console.log(formikBag, slickRef);

    const { submitForm } = formikBag;
    const { current } = slickRef;

    if (currentSlideIndex === sliderLength) {
      submitForm();
      return;
    }

    current?.slickNext();
  };

  const handleSubmit = val => {
    console.log(val);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    category: '',
    fit: '',
    price: '',
  };

  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string()
      .email()
      .required(),
    gender: string().required(),
    category: string().required(),
    fit: string().required(),
    price: number().required(),
  });

  return (
    <>
      <SEO title="Title" description="description" />
      <CustomersLayout showFooter={false}>
        <StyleFinderWizardForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          currentSlideIndex={currentSlideIndex}
          onSubmitBtnClick={handleSubmitBtnClick}
          setCurrentSlideIndex={setCurrentSlideIndex}
        >
          <WizardFormQuestionWrapper
            title={
              <span>
                The <span className="text-primary">AI Style</span> Finder.
              </span>
            }
            description="Answer Some Questions So Our AI Stylist Can Recommend Outfits We Believe Will Be A Great Addition To Your Closet."
          >
            <div className="mt-10 md:max-w-md md:mx-auto">
              <div className="md:flex md:items-center md:justify-between">
                <div>
                  <InputField
                    errors={{}}
                    name="firstName"
                    touched={{}}
                    label="First Name"
                  />
                </div>

                <div className="ml-2">
                  <InputField
                    errors={{}}
                    name="lastName"
                    touched={{}}
                    label="Last Name"
                  />
                </div>
              </div>

              <InputField
                errors={{}}
                name="email"
                touched={{}}
                label="Email Address"
              />
            </div>
          </WizardFormQuestionWrapper>
          <WizardFormQuestionWrapper
            title="What's your Gender"
            description="Answer Some Questions So We Can Know You Enough To Recommend Outfits We Believe Will"
          >
            <div className="flex items-center md:max-w-md md:mx-auto">
              <ImageSelect
                title="Male"
                className="w-1/2 mt-10 mr-4"
                imgSrc="/images/gender-men.jpg"
              />
              <ImageSelect
                title="Female"
                className="w-1/2 mt-10"
                imgSrc="/images/gender-women.jpg"
              />
            </div>
          </WizardFormQuestionWrapper>
          <WizardFormQuestionWrapper
            title="What kind of outfit are you looking for"
            description="Answer Some Questions So We Can Know You Enough To Recommend Outfits We Believe Will"
          >
            <div className="flex flex-wrap items-center -mx-2">
              <ImageSelect
                title="Work & Official Attire"
                className="w-1/2 px-2 mt-10 md:w-1/4"
                imgSrc="/images/category-work-official-attire.jpg"
              />
              <ImageSelect
                title="Everyday Essentials"
                className="w-1/2 px-2 mt-10 md:w-1/4"
                imgSrc="/images/category-everyday-essentails.jpg"
              />

              <ImageSelect
                title="Parties"
                className="w-1/2 px-2 mt-4 md:w-1/4 md:mt-10"
                imgSrc="/images/category-parties.jpg"
              />
              <ImageSelect
                title="Ethnic Occassions"
                className="w-1/2 px-2 mt-4 md:w-1/4 md:mt-10"
                imgSrc="/images/category-ethnic-occassions.jpg"
              />
            </div>
          </WizardFormQuestionWrapper>
          <WizardFormQuestionWrapper
            title="What sort of fit are you after"
            description="Answer Some Questions So We Can Know You Enough To Recommend Outfits We Believe Will"
          >
            <div className="flex items-center md:max-w-md md:mx-auto">
              <ImageSelect
                title="Loose"
                className="w-1/2 mt-10 mr-4"
                imgSrc="/images/loose-fit.jpg"
              />
              <ImageSelect
                title="Slim"
                className="w-1/2 mt-10"
                imgSrc="/images/slim-fit.jpg"
              />
            </div>
          </WizardFormQuestionWrapper>
          <WizardFormQuestionWrapper
            title="How much are you looking to spend?"
            description="Answer Some Questions So We Can Know You Enough To Recommend Outfits We Believe Will"
          >
            <div className="pt-20 pb-6 md:max-w-md md:mx-auto">
              <InputRange
                step={200}
                minValue={500}
                maxValue={10000}
                value={price}
                onChange={value => setPrice(value)}
                formatLabel={value => `£${formatNumber(value)}`}
              />
            </div>
          </WizardFormQuestionWrapper>
        </StyleFinderWizardForm>
      </CustomersLayout>
    </>
  );
};

export default StyleFinder;
