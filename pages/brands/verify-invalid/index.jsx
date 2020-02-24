import { SEO, Auth } from '@components';

const BrandsVerifyInvalid = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth
      hideSideBarOnMobile
      title="Join Scizzor & Increase Your Instore Appointments"
    >
      <h3 className="mb-3 text-center mb-4 md:mb-6">Verification Token Invalid</h3>
      <p className="text-center text-sm text-secondary leading-relaxed max-w-xs mx-auto">
        You have provided an invalid verification token. Click here to register as a <a className="text-primary" href="/brands/register">brand</a> or <a className="text-primary" href="/customers/register">customer</a>.
      </p>
    </Auth>
  </>
);

export default BrandsVerifyInvalid;
