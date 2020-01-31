const BrandsTitleBanner = () => (
  <div className="px-5 py-8 bg-tertiary text-center md:px-12 md:text-left">
    <h4 className="leading-relaxed mb-1 md:text-3xl">
      Your Outfits -{' '}
      <span className="text-xl text-primary">6 Outfits Added</span>
    </h4>
    <p className="text-sm mb-3">Here you'd find outfits that you've added</p>
    <button className="btn-sm text-sm focus:outline-none focus:shadow-outline">
      Add New Outfit
    </button>
  </div>
);

export default BrandsTitleBanner;
