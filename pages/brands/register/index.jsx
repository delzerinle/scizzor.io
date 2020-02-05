import { useRouter } from 'next/router';
import { SEO, Auth, BrandSignUpForm } from '@components';

const BrandsRegister = () => {
  const router = useRouter();

  const handleSubmit = async values => {
    console.log(values);
    router.push('/brands/verify');
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <Auth title="Join Scizzor & Increase Your Instore Appointments">
        <p className="text-center font-medium md:hidden">Create a Brand account</p>
        <h3 className="hidden md:block xl:hidden mb-3">Create a Brand account</h3>
        <h2 className="hidden xl:block mb-3">Create a Brand account</h2>
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
