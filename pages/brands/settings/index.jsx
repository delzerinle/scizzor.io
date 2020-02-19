import {
  SEO,
  BrandsLayout,
  BrandsUpdateProfileForm,
  BrandsUpdatePasswordForm,
} from '@components';

const BrandsSettings = () => {
  const handleUpdateProfile = val => {
    console.log(val);
  };

  const handleUpdatePassword = val => {
    console.log(val);
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <BrandsLayout>
        <div className="px-3 md:px-0">
          <p className="font-medium pt-4">Profile Details</p>
          <div className="relative pt-4 md:pt-8">
            <img
              alt="avatar"
              src="/images/avatar.jpg"
              className="w-24 h-24 object-cover rounded-full mx-auto md:w-16 md:h-16 md:ml-0"
            />
            <svg
              className="w-10 h-10 fill-current text-white absolute avatar-cam-center mt-2 md:-mt-1 md:ml-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 25.333a5.333 5.333 0 100-10.666 5.333 5.333 0 000 10.666z" />
              <path d="M15 3.333l-3.05 3.334H6.667A3.343 3.343 0 003.333 10v20c0 1.834 1.5 3.334 3.334 3.334h26.666c1.834 0 3.334-1.5 3.334-3.334V10c0-1.833-1.5-3.333-3.334-3.333H28.05L25 3.334H15zm5 25A8.336 8.336 0 0111.667 20c0-4.6 3.733-8.333 8.333-8.333S28.333 15.4 28.333 20 24.6 28.334 20 28.334z" />
            </svg>
          </div>
          <BrandsUpdateProfileForm onSubmit={handleUpdateProfile} />
          <hr className="border-t border-alt-2 w-full my-8" />
          <p className="text-sm font-medium pb-3">Update Password</p>
          <BrandsUpdatePasswordForm onSubmit={handleUpdatePassword} />
        </div>
      </BrandsLayout>
    </>
  );
};

export default BrandsSettings;
