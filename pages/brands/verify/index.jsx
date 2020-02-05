import { SEO, Auth } from '@components';

const BrandsVerify = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth hideSideBarOnMobile>
      <h3 className="xl:hidden text-center mb-4 md:mb-6">Verify your account</h3>
      <h2 className="hidden xl:block text-center mb-4 md:mb-6">Verify your account</h2>
      <p className="text-center text-sm text-secondary leading-relaxed max-w-xs mx-auto">
        We sent a verification link to your account. Please click on it to
        verify your Scizzor account.
      </p>
    </Auth>
  </>
);

export default BrandsVerify;
