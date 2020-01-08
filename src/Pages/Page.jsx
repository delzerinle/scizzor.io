import React from 'react';
import withOverflow from '../HOC/Global/WithOverflow';
import withAuthPage from '../HOC/Brand/WithAuthPage';

const Page = (props) => {
  return(
    <p>Scrollable or non scrolllable</p>
  );
}

const ScrollablePage = withOverflow(withAuthPage(Page), false);

export default ScrollablePage;
