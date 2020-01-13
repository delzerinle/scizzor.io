import React from 'react';
import styled from 'styled-components';

const ScrollablePageTemplate = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
`;

const FixedPageTemplate = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  max-height: 100vh;
`;

const withOverflow = (Page, scrollable) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        scrollable: scrollable
      };
    }

    render() {
      let pageDiv = <FixedPageTemplate><Page/></FixedPageTemplate>;

      if (scrollable) {
        pageDiv = <ScrollablePageTemplate><Page/></ScrollablePageTemplate>;
      }

      return(
        <React.Fragment>
          {pageDiv}
        </React.Fragment>
      ); 
    }
  }
}

export default withOverflow;
