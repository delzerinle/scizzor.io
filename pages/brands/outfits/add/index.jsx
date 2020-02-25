import React, { useState } from 'react';
import { object, string, number } from 'yup';
import InputRange from 'react-input-range';

import InputField from '@components/Forms/formElements/InputField';

import {
  SEO,
  BackToPage,
  ImageSelect,
  BrandsLayout,
  AddOutfitsWizardForm,
  WizardFormQuestionWrapper,
} from '@components';

const AddOutfits = () => {
  const [timeLine, setTimeLine] = useState({ min: 2, max: 3 });

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
            validationSchema={validationSchema}
          >
            {/* <p>1</p> */}
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
