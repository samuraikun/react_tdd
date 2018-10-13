import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gists', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicked the `お布施する` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('add a new gift to `state` when clicked the `お布施する` button', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });
  
    it('add a new gift to the rendered list when clicking the `お布施する` button', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift Component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});