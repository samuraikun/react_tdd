import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gists', () => {
  expect(app.state().gifts).toEqual([]);
});

it('add a new gift to `state` when clicked the `add gift` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{id: 1}]);
});