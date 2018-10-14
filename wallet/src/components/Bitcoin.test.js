import React from 'react';
import { mount, shallow } from 'enzyme';
import { Bitcoin } from './Bitcoin';

describe('Bitcoin', () => {
  let props = { balance: 10, bitcoin: {} };
  let bitcoin = shallow(<Bitcoin {...props} />);

  it('renders properly', () => {
    expect(bitcoin).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();

    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      bitcoin = mount(<Bitcoin {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { JPY: { rate: '1000' } } } };
      bitcoin = shallow(<Bitcoin {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(bitcoin.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});