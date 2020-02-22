import { object, string, number } from 'yup';

import {
  SEO,
  BrandsLayout,
  BackToPage,
  AddOutfitsWizardForm,
  AddOutfitQuestionWrapper,
} from '@components';

const AddOutfits = () => {
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
            <p>1</p>
            <AddOutfitQuestionWrapper
              title="How Does Your Clothing Fit?"
              description="Have you designed it to have a loose fit on the body or slim fit?"
            >
              <p>2</p>
            </AddOutfitQuestionWrapper>

            <AddOutfitQuestionWrapper
              title="How Long Does It Take To Make Your Outfit?"
              description="Customers usually wait around 2 weeks"
            >
              <p>3</p>
            </AddOutfitQuestionWrapper>

            <AddOutfitQuestionWrapper
              title="What Category Would You Place Your Outfit Under?"
              description="Select all the options that apply"
            >
              <p>4</p>
            </AddOutfitQuestionWrapper>

            <AddOutfitQuestionWrapper
              title="How Much Does Your Outfit Retail For?"
              description="Scizzor takes £10 per customer so adjust your price accordingly"
            >
              <p>5</p>
            </AddOutfitQuestionWrapper>
          </AddOutfitsWizardForm>
        </div>
      </BrandsLayout>
    </>
  );
};

export default AddOutfits;
