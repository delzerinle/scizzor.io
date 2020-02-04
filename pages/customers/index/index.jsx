import { SEO, CustomersLayout, LandingPageBanner } from '@components';

const Home = () => (
  <>
    <SEO title="Title" description="description" />
    <CustomersLayout>
      <LandingPageBanner />
    </CustomersLayout>
  </>
);

export default Home;
