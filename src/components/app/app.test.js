import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={30}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
