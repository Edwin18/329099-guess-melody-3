import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';

const App = (props) => {
  return <React.Fragment>
    <WelcomeScreen
    // eslint-disable-next-line react/prop-types
      errorsCount = {props.errorsCount}
    />
  </React.Fragment>;
};

export default App;
