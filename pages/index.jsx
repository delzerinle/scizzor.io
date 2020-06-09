import {
  SEO,
  CustomersLayout,
  LandingPageBanner,
  LandingPageInfoCard,
  LandingPageDesktopInfoCard,
  LandingPageProductSlider,
  LandingPageProduct,
  LandingPageCustomerCTA,
  LandingPageFavBrandsBanner,
  LandingPageBrandSignupBanner,
} from '@components';

const Home = () => (
  <>
    <SEO title="Title" description="description" />
    <CustomersLayout>
      <LandingPageBanner />
      <LandingPageInfoCard />
      <LandingPageDesktopInfoCard>
        <LandingPageProduct
          price={250}
          className="border-b-0"
          image="/images/apparel1.jpg"
          title="Paul Smith - Wool Suit Jacket2"
        />
        <LandingPageProduct
          price={3000}
          className="border-b-0"
          image="/images/apparel2.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />
        <LandingPageProduct
          price={2999.99}
          className="border-b-0"
          image="/images/apparel3.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />

        <LandingPageProduct
          price={2999.99}
          image="/images/apparel3.jpg"
          title="Paul Smith - Wool Suit Jacket"
          className="hidden lg:block border-b-0"
        />
        <LandingPageProduct
          price={3000}
          className="hidden lg:block"
          image="/images/apparel2.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />
        <LandingPageCustomerCTA className="border border-black right-0 w-120 absolute md:block md:text-left md:bg-white lg:left-0 lg:right-auto lg:w-100 xl:w-120" />
      </LandingPageDesktopInfoCard>
      <LandingPageProductSlider>
        <LandingPageProduct
          price={250}
          image="/images/apparel1.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />
        <LandingPageProduct
          price={3000}
          image="/images/apparel2.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />
        <LandingPageProduct
          price={2999.99}
          image="/images/apparel3.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />
        <LandingPageProduct
          price={250}
          image="/images/apparel1.jpg"
          title="Paul Smith - Wool Suit Jacket"
        />
      </LandingPageProductSlider>
      <LandingPageCustomerCTA className="md:hidden" />
      <LandingPageFavBrandsBanner />
      <LandingPageBrandSignupBanner />
    </CustomersLayout>
  </>
);

export default Home;
