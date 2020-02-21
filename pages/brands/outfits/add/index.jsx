import { object, string, number } from 'yup';

import {
  SEO,
  BrandsLayout,
  BackToPage,
  AddOutfitsWizardForm,
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
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </AddOutfitsWizardForm>
        </div>
      </BrandsLayout>
    </>
  );
};

export default AddOutfits;
