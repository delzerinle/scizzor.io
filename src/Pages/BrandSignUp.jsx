import React from 'react';
import withOverflow from '../HOC/Global/WithOverflow';
import withAuthPage from '../HOC/Brand/WithAuthPage';
import BrandSignUpForm from '../components/BrandSignUpForm';

const BrandSignUp = (props) => {
  return(
    <React.Fragment>
      <BrandSignUpForm/>
    </React.Fragment>
  );
}

const BrandSignUpPage = withOverflow(withAuthPage(BrandSignUp), false);

export default BrandSignUpPage;
