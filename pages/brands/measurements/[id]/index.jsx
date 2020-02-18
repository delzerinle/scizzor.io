import { SEO, BrandsLayout, BackToPage, MeasurementsForm } from '@components';

const SingleMeasurement = () => {
  const images = [
    { id: 1, src: '/images/apparel4.jpg' },
    { id: 2, src: '/images/apparel5.jpg' },
    { id: 3, src: '/images/apparel1.jpg' },
  ];
  return (
    <>
      <SEO title="Title" description="description" />
      <BrandsLayout>
        <div className="px-3 md:px-0">
          <BackToPage
            className="pb-8"
            link="/brands/measurements"
            title="Back to Measurements"
          />
          <MeasurementsForm>
            <div className="pt-8 pb-12 flex flex-wrap items-center w-full -mx-1 lg:py-5">
              {images.map(({ id, src }) => (
                <img
                  alt=""
                  key={id}
                  src={src}
                  className="rounded-lg object-cover w-1/3 h-32 px-1 md:h-40  lg:h-24"
                />
              ))}
            </div>
          </MeasurementsForm>
        </div>
      </BrandsLayout>
    </>
  );
};

export default SingleMeasurement;
