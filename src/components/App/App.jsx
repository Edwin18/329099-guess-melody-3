import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
// eslint-disable-next-line react/prop-types
const App = ({errorsCount}) => {
  return <React.Fragment>
    <WelcomeScreen
    // eslint-disable-next-line react/prop-types
      errorsCount={errorsCount}
    />
  </React.Fragment>;
};

export default App;
