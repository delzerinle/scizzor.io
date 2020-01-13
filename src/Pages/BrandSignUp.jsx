import React from 'react';
import withOverflow from '../HOC/Global/WithOverflow';
import forAuthPage from '../HOC/Brand/forAuthPage';

const BrandSignUp = (props) => {
  return(
    <React.Fragment>
      Hello World!
    </React.Fragment>
  );
}

const BrandSignUpPage = withOverflow(forAuthPage(BrandSignUp), false);

export default BrandSignUpPage;
