import React from 'react';
import PropTypes from 'prop-types';

const Auth = ({ children }) => (
  <div className="w-full flex flex-col md:flex-row max-w-screen-xl min-h-screen">
    <div className="bg-tertiary px-5 pt-12 pb-8 w-360 md:flex-shrink-0 md:pt-24 md:relative md:overflow-y-hidden">
      <h3 className="text-center md:text-left md:max-w-xs">
        Join Scizzor & Increase Your Instore Appointments
      </h3>
      <img
        className="hidden md:block w-80 h-80 -ml-10 -mb-16 object-cover rounded-full absolute bottom-0 left-0"
        src="/images/auth.jpg"
        alt="auth"
      />
    </div>
    <div className="bg-alt-3 px-5 py-12 flex-1 md:pt-24">
      <div className="max-w-lg mx-auto">{children}</div>
    </div>
  </div>
);

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
