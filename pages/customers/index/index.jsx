import {
  SEO,
  CustomersLayout,
  LandingPageBanner,
  LandingPageInfoCard,
  LandingPageProductSlider,
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
      <LandingPageProductSlider />
      <LandingPageCustomerCTA />
      <LandingPageFavBrandsBanner />
      <LandingPageBrandSignupBanner />
    </CustomersLayout>
  </>
);

export default Home;
