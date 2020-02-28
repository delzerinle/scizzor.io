import React, { useState } from 'react';
import { object, string, number } from 'yup';
import InputRange from 'react-input-range';

import { ImageDragNDrop } from '@components';
import InputField from '@components/Forms/formElements/InputField';
import InputTextArea from '@components/Forms/formElements/InputTextArea';

import {
  SEO,
  BackToPage,
  ImageSelect,
  BrandsLayout,
  SectionGroup,
  AddOutfitsWizardForm,
  WizardFormQuestionWrapper,
} from '@components';

const AddOutfits = () => {
  const sliderLength = 4;
  const [timeLine, setTimeLine] = useState({ min: 2, max: 3 });
  const [maxCompletedSlide, setMaxCompletedSlide] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToSlideIndex = (index, slickRef) => {
    // validate
    const isSlideFieldValid = validateSlideFields(currentSlideIndex);

    if (!isSlideFieldValid) {
      return;
    }

    if (index === currentSlideIndex) {
      return;
    }

    const { current } = slickRef;
    current?.slickGoTo(index);
  };

  const handleSubmitBtnClick = (formikBag, slickRef) => {
    // validate
    const isSlideFieldValid = validateSlideFields(currentSlideIndex);

    if (!isSlideFieldValid) {
      return;
    }

    const { submitForm } = formikBag;
    const { current } = slickRef;

    if (currentSlideIndex === sliderLength) {
      submitForm();
      return;
    }

    current?.slickNext();
  };

  const validateSlideFields = index => {
    console.log(index);
    return true;
  };

  const handleSubmit = val => {
    console.log(val);
  };

  const initialValues = {
    name: '',
    description: '',
    fabricDescription: '',
    // images

    fit: '',
    duration: '',
    category: '',
    price: '',
  };

  const validationSchema = object().shape({
    name: string().required(),
    description: string().required(),
    fabricDescription: string().required(),
    // images
    fit: string().required(),
    duration: string().required(),
    category: string().required(),
    price: number().required(),
  });

  return (
    <>
      <SEO title="Title" description="description" />
      <BrandsLayout>
        <div className="px-3 md:px-0 h-full flex flex-col">
          <div className="flex-shrink-0">
            <BackToPage
              className="pb-4"
              link="/brands/outfits"
              title="Back to Outfits"
            />
          </div>
          <AddOutfitsWizardForm
            title="Add New Outfit"
            onSubmit={handleSubmit}
            initialValues={initialValues}
            goToSlideIndex={goToSlideIndex}
            validationSchema={validationSchema}
            maxCompletedSlide={maxCompletedSlide}
            onSubmitBtnClick={handleSubmitBtnClick}
            setCurrentSlideIndex={setCurrentSlideIndex}
            setMaxCompletedSlide={setMaxCompletedSlide}
          >
            <div className="pt-12 md:flex md:flex-wrap md:-mx-2">
              <div className="md:w-3/5 md:px-2">
                <SectionGroup title="Outfit Details">
                  <InputField
                    errors={{}}
                    name="name"
                    touched={{}}
                    label="Outfit Name"
                  />

                  <InputTextArea
                    errors={{}}
                    touched={{}}
                    name="description"
                    label="Outfit Description"
                  />

                  <InputTextArea
                    errors={{}}
                    touched={{}}
                    name="fabricDescription"
                    label="Fabric Description"
                  />
                </SectionGroup>
              </div>

              <div className="mt-12 md:mt-0 md:w-2/5 md:px-2">
                <SectionGroup title="Apparel Images">
                  <ImageDragNDrop />
                </SectionGroup>
              </div>
            </div>
            <WizardFormQuestionWrapper
              title="How Does Your Clothing Fit?"
              description="Have you designed it to have a loose fit on the body or slim fit?"
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
              title="How Long Does It Take To Make Your Outfit?"
              description="Customers usually wait around 2 weeks"
            >
              <div className="pt-20 pb-6 md:max-w-md md:mx-auto">
                <InputRange
                  maxValue={8}
                  minValue={1}
                  value={timeLine}
                  onChange={value => setTimeLine(value)}
                  formatLabel={value =>
                    value === 1 ? `${value} Wk` : `${value} Wks`
                  }
                />
              </div>
            </WizardFormQuestionWrapper>

            <WizardFormQuestionWrapper
              title="What Category Would You Place Your Outfit Under?"
              description="Select all the options that apply"
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
              title="How Much Does Your Outfit Retail For?"
              description="Scizzor takes £10 per customer so adjust your price accordingly"
            >
              <div className="pt-16 md:max-w-md md:mx-auto">
                <InputField
                  errors={{}}
                  name="price"
                  touched={{}}
                  label="Outfit Price (£)"
                />
              </div>
            </WizardFormQuestionWrapper>
          </AddOutfitsWizardForm>
        </div>
      </BrandsLayout>
    </>
  );
};

export default AddOutfits;
