import React from 'react';

import '../../styles/_authPage.scss';
import auth_image from '../../images/auth_round_image.jpg';


const withAuthPage = (Page) => {
  return class extends React.Component {
    render() {
      return(
        <div className="page_layout">
          <div className="auth_side_bar">
            <div className="auth_side_bar_heading_container">
              <h2 className="auth_side_bar_heading">join scizzor & increase your instore appointments</h2>
            </div>
            <div className="auth_side_bar_image_container">
              <img className="auth_side_bar_image" src={auth_image} alt="join scizzor"/>
            </div>
          </div>
          <div className="auth_main_content">
            <Page/>
          </div>
        </div>
      );
    }
  }
}

export default withAuthPage;
