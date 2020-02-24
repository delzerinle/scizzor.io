import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FormErrorMessage, SEO, Auth, SignInForm } from '@components';
import Client from '@api/apiClient';
import AuthContext from "@context/auth-context";

const CustomersSignIn = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const router = useRouter();
  const store = useContext(AuthContext);

  const handleSubmit = async values => {
    Client.authenticateUser(values, response => {
      response && console.log(response);
      if (response.success) {
        setError(false);
        store.login(response.data.token, response.data.tokenExpiration);
        router.push('/');
      } else {
        setError(true);
        setErrorMessage(response.message);
      }
    });
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
        <h3 className="hidden mb-3 md:block">Sign In to Scizzor</h3>
        {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        <SignInForm onSubmit={handleSubmit} />
        <p className="mt-5">Forgot your password?</p>
        <p>
          Don't have an account?{' '}
          <a href="/customers/register" className="text-primary">Create one here</a>
        </p>
      </Auth>
    </>
  );
};

export default CustomersSignIn;
