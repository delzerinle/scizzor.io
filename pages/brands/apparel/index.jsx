import { SEO, BrandsLayout, BrandsTitleBanner, ApparelCard } from '@components';

const Apparel = () => (
  <>
    <SEO title="Title" description="description" />
    <BrandsLayout>
      <BrandsTitleBanner />
      <div className="flex flex-wrap mt-2 px-3 md:-mx-2 md:px-0 md:mt-0">
        <ApparelCard
          imageSrc="/images/apparel1.jpg"
          className="px-2 mt-8 md:mt-5 w-1/2 md:w-1/3"
        />
        <ApparelCard
          imageSrc="/images/apparel2.jpg"
          className="px-2 mt-8 md:mt-5 w-1/2 md:w-1/3"
        />
        <ApparelCard
          imageSrc="/images/apparel3.jpg"
          className="px-2 mt-8 md:mt-5 w-1/2 md:w-1/3"
        />
        <ApparelCard
          imageSrc="/images/apparel1.jpg"
          className="px-2 mt-8 md:mt-5 w-1/2 md:w-1/3"
        />
      </div>
    </BrandsLayout>
  </>
);

export default Apparel;
