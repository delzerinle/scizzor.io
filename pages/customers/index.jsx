import {
  SEO,
  SelectField,
  ApparelCard,
  PairWithItem,
  PairWithSlider,
  CustomersLayout,
  NewsletterSubscriptionForm,
} from '@components';

const CustomerDash = () => (
  <>
    <SEO title="Title" description="description" />
    <CustomersLayout>
      <div className="px-5 pt-10 pb-5 md:px-10 md:bg-tertiary md:py-16">
        <h4 className="mb-3 md:max-w-lg">
          <span className="text-primary">Alex</span>, You'll look great in
          these:
        </h4>
        <p className="text-sm leading-6 md:max-w-lg">
          Based on the questions you answered in our style recommender. These
          are the outfits our recommendation system has suggested. You can book
          appointments with these brands for measurements & fittings:
        </p>
      </div>

      <div className="flex items-center justify-between px-5 md:hidden">
        <SelectField className="w-1/2">
          <option>Sort</option>
          <option>Sort</option>
        </SelectField>

        <SelectField className="w-1/2 ml-4">
          <option>Filter</option>
          <option>Filter</option>
        </SelectField>
      </div>

      <div className="hidden md:block px-10 pt-5">
        <p className="text-primary text-sm">Browse by</p>

        <div className="flex items-center flex-wrap">
          <SelectField className="w-48 mr-5 mt-4">
            <option>Time To Make</option>
            <option>Time To Make</option>
          </SelectField>

          <SelectField className="w-48 mr-5 mt-4">
            <option>Type</option>
            <option>Type</option>
          </SelectField>

          <SelectField className="w-48 mr-5 mt-4">
            <option>Brand</option>
            <option>Brand</option>
          </SelectField>

          <SelectField className="w-48 mr-5 mt-4">
            <option>Colour</option>
            <option>Colour</option>
          </SelectField>

          <SelectField className="w-48 mr-5 mt-4">
            <option>Price Range</option>
            <option>Price Range</option>
          </SelectField>
        </div>
      </div>
      <div className="flex flex-wrap px-3 md:px-8">
        <ApparelCard
          price={400}
          name="Eleventy"
          btnTitle="Get Measured"
          imageSrc="/images/apparel1.jpg"
          className="px-2 mt-8 md:mt-12 w-1/2 md:w-1/3"
          title="Classic Fit Stretch Plaid Wool Suit"
        />
        <ApparelCard
          price={400}
          name="Eleventy"
          btnTitle="Get Measured"
          imageSrc="/images/apparel2.jpg"
          className="px-2 mt-8 md:mt-12 w-1/2 md:w-1/3"
          title="Classic Fit Stretch Plaid Wool Suit"
        />
        <ApparelCard
          price={400}
          name="Eleventy"
          btnTitle="Get Measured"
          imageSrc="/images/apparel3.jpg"
          className="px-2 mt-8 md:mt-12 w-1/2 md:w-1/3"
          title="Classic Fit Stretch Plaid Wool Suit"
        />
        <ApparelCard
          price={400}
          name="Eleventy"
          btnTitle="Get Measured"
          imageSrc="/images/apparel1.jpg"
          className="px-2 mt-8 md:mt-12 w-1/2 md:w-1/3"
          title="Classic Fit Stretch Plaid Wool Suit"
        />
        <ApparelCard
          price={400}
          name="Eleventy"
          btnTitle="Get Measured"
          imageSrc="/images/apparel3.jpg"
          className="px-2 mt-8 md:mt-12 w-1/2 md:w-1/3"
          title="Classic Fit Stretch Plaid Wool Suit"
        />
        <ApparelCard
          price={400}
          name="Eleventy"
          btnTitle="Get Measured"
          imageSrc="/images/apparel1.jpg"
          className="px-2 mt-8 md:mt-12 w-1/2 md:w-1/3"
          title="Classic Fit Stretch Plaid Wool Suit"
        />
      </div>

      <div className="px-5 mt-12 mb-10 md:max-w-xs md:mx-auto md:mt-20 md:mb-16">
        <button className="btn-alt-sm text-sm border-primary">
          View More Suggestions
        </button>
      </div>

      <PairWithSlider>
        <PairWithItem
          price={75}
          name="Solely"
          image="/images/bag1.jpg"
          description="Formal Two Tone Leather Briefcase"
        />
        <PairWithItem
          price={40}
          name="Solely"
          image="/images/apparel1.jpg"
          description="Embossed Leather Shoes"
        />
        <PairWithItem
          price={40}
          name="Solely"
          image="/images/bag1.jpg"
          description="Formal Two Tone Leather Briefcase"
        />
      </PairWithSlider>
      <NewsletterSubscriptionForm />
    </CustomersLayout>
  </>
);

export default CustomerDash;
