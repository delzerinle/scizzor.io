import { SEO, Auth, SignInForm } from '@components';

const CustomersSignIn = () => {
  const handleSubmit = async values => {
    console.log(values);
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <Auth
        title={
          <span>
            Sustainable & Stylish, Personalized For{' '}
            <span className="text-primary">You.</span>
          </span>
        }
      >
        <p className="text-center font-medium md:hidden">Sign in to Scizzor</p>
        <h3 className="hidden mb-3 md:block xl:hidden">Sign In to Scizzor</h3>
        <h2 className="hidden mb-3 xl:block">Sign In to Scizzor</h2>
        <SignInForm onSubmit={handleSubmit} />
        <p className="mt-5">Forgot your password?</p>
        <p>
          Don't have an account?{' '}
          <span className="text-primary">Create one here</span>
        </p>
      </Auth>
    </>
  );
};

export default CustomersSignIn;
