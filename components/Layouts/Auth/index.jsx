import React from 'react';
import PropTypes from 'prop-types';

const Auth = ({ title = '', children, hideSideBarOnMobile = false }) => (
  <div className="w-full flex flex-col md:flex-row max-w-full min-h-screen mx-auto">
    <div
      className={`bg-tertiary px-5 lg:px-8 xl:px-20 pt-12 md:pt-24 xl:pt-40 pb-8 w-360 md:w-1/3 md:flex-shrink-0 md:relative md:overflow-y-hidden ${
        hideSideBarOnMobile ? 'hidden md:block' : 'block'
      }`}
    >
      <h4 className="md:hidden text-center md:text-left md:max-w-xs">{title}</h4>
      <h3 className="hidden md:block xl:hidden text-center md:text-left md:max-w-xs">{title}</h3>
      <h2 className="hidden xl:block text-center md:text-left md:max-w-s">{title}</h2>
      <img
        className="hidden md:block w-80 h-80 -ml-10 -mb-16 object-cover rounded-full absolute bottom-0 left-0"
        src="/images/auth.jpg"
        alt="auth"
      />
    </div>
    <div className="bg-alt-3 px-5 py-12 flex-1 flex">
      <div className="w-full max-w-lg mx-auto self-center">{children}</div>
    </div>
  </div>
);

Auth.propTypes = {
  children: PropTypes.node.isRequired,
  hideSideBarOnMobile: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Auth;
