import React, { useState } from 'react';
import { object, string, number } from 'yup';
import InputRange from 'react-input-range';

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
        <div className="px-3 md:px-0">
          <BackToPage
            className="pb-4"
            link="/brands/outfits"
            title="Back to Outfits"
          />
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
              <div className="flex items-center max-w-md mx-auto">
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
              <div className="pt-16 pb-6 max-w-md mx-auto">
                <InputRange
                  maxValue={8}
                  minValue={1}
                  value={timeLine}
                  onChange={value => setTimeLine(value)}
                  formatLabel={value =>
                    value === 1 ? `${value} week` : `${value} weeks`
                  }
                />
              </div>
            </WizardFormQuestionWrapper>

            <WizardFormQuestionWrapper
              title="What Category Would You Place Your Outfit Under?"
              description="Select all the options that apply"
            >
              <p>4</p>
            </WizardFormQuestionWrapper>

            <WizardFormQuestionWrapper
              title="How Much Does Your Outfit Retail For?"
              description="Scizzor takes £10 per customer so adjust your price accordingly"
            >
              <p>5</p>
            </WizardFormQuestionWrapper>
          </AddOutfitsWizardForm>
        </div>
      </BrandsLayout>
    </>
  );
};

export default AddOutfits;
