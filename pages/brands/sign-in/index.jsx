import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SEO, Auth, SignInForm } from '@components';
import Client from '@api/apiClient';
import AuthContext from "@context/auth-context";

const BrandsSignIn = () => {
  const router = useRouter();
  const store = useContext(AuthContext);

  const handleSubmit = async values => {
    Client.authenticateUser(values, response => {
      response && console.log(response);
      if (response.success === 'true') {
        store.login(response.data.token, response.data.tokenExpiration);
        router.push('/');
      } else {
        console.log(response);
      }
    });
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <Auth title="Join Scizzor & Increase Your Instore Appointments">
        <p className="text-center font-medium md:hidden">Sign in to Scizzor</p>
        <h3 className="hidden mb-3 md:block">Sign In to Scizzor</h3>
        <SignInForm onSubmit={handleSubmit} />
        <p className="mt-5">Forgot your password?</p>
        <p>
          Don't have an account?{' '}
          <a href="/brands/register" className="text-primary">Create one here</a>
        </p>
      </Auth>
    </>
  );
};

export default BrandsSignIn;
