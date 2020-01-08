import React from 'react';

import './styles/_formHeader.scss';

const FormHeader = (props) => {
  return(
    <div className="formHeaderContainer">
      <div className="formHeaderTitle">{props.title}</div>
      <p className="formHeaderSubTitle">{props.subtitle}</p>
    </div>
  );
}

export default FormHeader;
