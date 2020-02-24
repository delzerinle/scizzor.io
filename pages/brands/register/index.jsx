import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SEO, Auth, BrandSignUpForm } from '@components';
import Client from '@api/apiClient';
import AuthContext from "../../../context/auth-context";

const BrandsRegister = () => {
  const router = useRouter();
  const store = useContext(AuthContext);

  const handleSubmit = async values => {
    Client.registerBrand(values, data => {
      data && console.log(data);
      if (data.status === 200) {
        router.push('/brands/verify');
      }
    });
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <Auth title="Join Scizzor & Increase Your Instore Appointments">
        <p className="text-center font-medium md:hidden">
          Create a Brand account
        </p>
        <h3 className="hidden mb-3 md:block">Create a Brand account</h3>
        <p className="text-center text-sm leading-relaxed md:text-left md:max-w-xs">
          Create your scizzor brand account to Increase your instore
          appointments
        </p>
        <BrandSignUpForm onSubmit={handleSubmit} />
      </Auth>
    </>
  );
};

export default BrandsRegister;
