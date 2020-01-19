import { SEO, Auth, BrandSignUpForm } from '@components';

const BrandsRegister = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth>
      <>
        <p className="text-center font-medium md:hidden">
          Create a Brand account
        </p>
        <h3 className="hidden mb-3 md:block">Create a Brand account</h3>
        <p className="text-center text-sm leading-relaxed mb-8 md:text-left md:max-w-xs">
          Create your scizzor brand account to Increase your instore
          appointments
        </p>
        <BrandSignUpForm />
      </>
    </Auth>
  </>
);

export default BrandsRegister;
