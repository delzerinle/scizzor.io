import React from 'react';
import withOverflow from '../HOC/Global/WithOverflow';
import withAuthPage from '../HOC/Brand/WithAuthPage';

const BrandSignUp = (props) => {
  return(
    <React.Fragment>
      Hello World!
    </React.Fragment>
  );
}

const BrandSignUpPage = withOverflow(withAuthPage(BrandSignUp), false);

export default BrandSignUpPage;
