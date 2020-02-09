const LandingPageBanner = () => (
  <div className="px-5 pb-6 text-center md:flex md:items-center md:text-left md:px-10 md:pb-2">
    <img
      src="/images/primary-banner.jpg"
      className="h-64 mx-auto mb-2 md:order-2 md:h-80 md:ml-auto md:mr-0 md:mb-0 lg:h-100"
      alt="primary banner"
    />
    <div className="md:order-1 md:ml-10">
      <h3 className="mb-4">One Size Never Fits All</h3>
      <p className="text-sm mx-auto w-full max-w-sm mb-8 leading-6 md:max-w-md">
        Experience Bespoke Fashion Enhanced By Machine Learning, Measurement
        Technology & Made-To-Measure Specialists.
      </p>
      <button className="btn-sm text-sm focus:outline-none focus:shadow-outline">
        Get Started
      </button>
    </div>
  </div>
);

export default LandingPageBanner;
