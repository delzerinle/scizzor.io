import { useRouter } from 'next/router';

const LandingPageBrandSignupBanner = () => {
  const router = useRouter();

  return (
    <div
      id="join-as-a-brand"
      className="px-5 pt-6 pb-10 bg-cover bg-no-repeat bg-center md:px-10 md:py-12"
      style={{
        backgroundImage: 'url(/images/brands-signup.jpg)',
      }}
    >
      <h4>
        Join the Scizzor <span className="text-primary">Crew</span>
      </h4>

      <p className="text-sm leading-6 mt-4 mb-2 w-full max-w-xs ml-0 mr-auto pr-5 md:max-w-sm">
        Are you a Fashion Brand specialized in making refined cuts, fabrics &
        details? Join as a Brand on Scizzor today
      </p>

      <button
        type="button"
        onClick={() => router.push('/brands/register')}
        className="btn-sm text-sm focus:outline-none focus:shadow-outline"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPageBrandSignupBanner;
