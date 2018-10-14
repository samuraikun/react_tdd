import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('contains a connected Bitcoin Component', () => {
    expect(app.find('Connect(Bitcoin)').exists()).toBe(true);
  });

  it('contains a link to the coindesk price page', () => {
    expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
  });
});