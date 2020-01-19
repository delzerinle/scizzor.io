import { SEO, Auth, BrandSignInForm } from '@components';

const BrandsSignIn = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth>
      <p className="text-center font-medium md:hidden">Sign in to Scizzor</p>
      <h3 className="hidden mb-3 md:block">Sign In to Scizzor</h3>
      <BrandSignInForm />
      <p className="mt-5">Forgot your password?</p>
      <p>
        Don't have an account?{' '}
        <span className="text-primary">Create one here</span>
      </p>
    </Auth>
  </>
);

export default BrandsSignIn;
