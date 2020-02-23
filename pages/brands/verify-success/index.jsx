import { SEO, Auth } from '@components';

const BrandsVerifySuccess = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth
      hideSideBarOnMobile
      title="Join Scizzor & Increase Your Instore Appointments"
    >
      <h3 className="mb-3 text-center mb-4 md:mb-6">Hello!</h3>
      <p className="text-center text-sm text-secondary leading-relaxed max-w-xs mx-auto">
        You have been successfully verified. Click <a className="text-primary" href="/brands/sign-in">here</a> to sign in to your account.
      </p>
    </Auth>
  </>
);

export default BrandsVerifySuccess;
