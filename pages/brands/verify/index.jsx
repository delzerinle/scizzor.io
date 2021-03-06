import { SEO, Auth } from '@components';

const BrandsVerify = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth
      hideSideBarOnMobile
      title="Join Scizzor & Increase Your Instore Appointments"
    >
      <h3 className="mb-3 text-center mb-4 md:mb-6">Verify your account</h3>
      <p className="text-center text-sm text-secondary leading-relaxed max-w-xs mx-auto">
        We sent a verification link to your account. Please click on it to
        verify your Scizzor account.
      </p>
    </Auth>
  </>
);

export default BrandsVerify;
