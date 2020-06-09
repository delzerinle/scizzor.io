const LandingPageInfoCard = () => (
  <div
    id="how-it-works-m"
    className="px-5 bg-cover bg-no-repeat bg-center pt-32 pb-3 relative linear-gradient md:hidden"
    style={{
      backgroundImage: 'url(/images/how-scizzor-works.jpg)',
    }}
  >
    <div className="relative z-20 max-w-sm">
      <h4 className="text-white mb-1">How Scizzor Works</h4>
      <p className="text-sm text-white leading-6 mb-2">
        Answer Some Questions So We Can Know You Enough To Recommend Outfits We
        Believe Will Be Great Addition To Your Closet.
      </p>
      <a className="text-white text-xs font-medium" href="#">
        DISCOVER MORE
      </a>
    </div>
  </div>
);

export default LandingPageInfoCard;
