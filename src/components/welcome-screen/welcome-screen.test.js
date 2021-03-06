import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`Render WelcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={30}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
