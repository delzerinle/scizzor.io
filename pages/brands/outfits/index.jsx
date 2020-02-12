import { SEO, BrandsLayout, BrandsTitleBanner, ApparelCard } from '@components';

const Outfits = () => (
  <>
    <SEO title="Title" description="description" />
    <BrandsLayout>
      <BrandsTitleBanner
        btnText="Add New Outfit"
        description="Here you'd find outfits that you've added"
        title={
          <>
            Your Outfits -{' '}
            <span className="text-xl text-primary">6 Outfits Added</span>
          </>
        }
      />
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

export default Outfits;
