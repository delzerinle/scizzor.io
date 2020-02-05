import {
  SEO,
  CustomersLayout,
  LandingPageBanner,
  LandingPageFavBrandsBanner,
  LandingPageBrandSignupBanner,
} from '@components';

const Home = () => (
  <>
    <SEO title="Title" description="description" />
    <CustomersLayout>
      <LandingPageBanner />
      <LandingPageFavBrandsBanner />
      <LandingPageBrandSignupBanner />
    </CustomersLayout>
  </>
);

export default Home;
