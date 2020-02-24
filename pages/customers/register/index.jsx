import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SEO, Auth, CustomerSignUpForm } from '@components';
import Client from '@api/apiClient';
import AuthContext from "../../../context/auth-context";

const CustomersRegister = () => {
  const router = useRouter();

  const handleSubmit = async values => {
    Client.registerCustomer(values, data => {
      data && console.log(data);
      if (data.success) {
        router.push('/brands/verify');
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
        <p className="text-center font-medium md:hidden">Create an account</p>
        <h3 className="hidden mb-3 md:block">Create an account</h3>
        <p className="text-center text-sm leading-relaxed md:text-left md:max-w-sm">
          Create your account to save your favourites and checkout even faster.
        </p>
        <CustomerSignUpForm onSubmit={handleSubmit} />
      </Auth>
    </>
  );
};

export default CustomersRegister;
