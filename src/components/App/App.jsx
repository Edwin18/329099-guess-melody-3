import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';

const App = ({errorsCount}) => {
  return <React.Fragment>
    <WelcomeScreen
      errorsCount={errorsCount}
    />
  </React.Fragment>;
};

export default App;

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};
