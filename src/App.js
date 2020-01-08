import React from 'react';
import ScrollablePage from './Pages/Page';
import BrandSignUpPage from './Pages/BrandSignUp';

import './styles/app.scss';

function App() {
  return (
    <div className="app">
      {/* <ScrollablePage/> */}
      <BrandSignUpPage/>
    </div>
  );
}

export default App;
