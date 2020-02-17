import React, { Children } from 'react';
import PropTypes from 'prop-types';

const LandingPageDesktopInfoCard = ({ children }) => (
  <div className="hidden md:block">
    <div
      className="px-10 pt-40 lg:pt-64 bg-cover bg-no-repeat bg-center relative flex justify-center lg:justify-start xl:justify-center"
      style={{
        backgroundImage: 'url(/images/how-scizzor-works.jpg)',
      }}
    >
      <div className="bg-white w-3/5 max-w-lg pl-8 pr-10 pt-6 border border-black border-r-0 relative z-10 -mb-6">
        <h4 className="mb-4">How Scizzor works</h4>
        <p className="text-secondary leading-6 text-sm mb-5">
          Answer some Questions So We Can Know You Enough To Recommend Outfits
          We Believe Will Be Great Addition To Your Closet.
        </p>

        <div className="landing-page-step">
          <div className="relative pb-10 pl-8 landing-page-step--item">
            <p className="font-medium mb-2">Find Your Fit & Style</p>
            <p className="text-sm leading-6">
              Answer some questions about your style and fit preferences, and
              anything else about how you like to wear your clothes.
            </p>
          </div>

          <div className="relative pb-10 pl-8 landing-page-step--item">
            <p className="font-medium mb-2">See Clothes We Recommend</p>
            <p className="text-sm leading-6">
              Based on the answers to your questions and your measurements we'll
              recommend sustainable and inclusive brands that suit your style.
            </p>
          </div>

          <div className="relative pb-10 pl-8 landing-page-step--item">
            <p className="font-medium mb-2">Book Appointment & Review Outfit</p>
            <p className="text-sm leading-6">
              Book an appointment for measurement and offer a review of your
              outfit after you wear it to improve your style and fit
              preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="w-56 relative landing-page-grid xl:w-100">
        {Children.map(children, (child, i) => (
          <div key={i} className="w-56 absolute landing-page-grid--item">
            {child}
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white py-44 lg:py-56 xl:py-48" />
  </div>
);

LandingPageDesktopInfoCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageDesktopInfoCard;
