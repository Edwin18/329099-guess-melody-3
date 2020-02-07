import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const welcomeButtonHandler = () => {};

const App = ({errorsCount}) => {
  return <React.Fragment>
    <WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeButtonClick={welcomeButtonHandler}
    />
  </React.Fragment>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
