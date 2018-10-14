import React from 'react';
import { mount, shallow } from 'enzyme';
import { Bitcoin } from './Bitcoin';

describe('Bitcoin', () => {
  const mockFetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {} };
  let bitcoin = shallow(<Bitcoin {...props} />);

  it('renders properly', () => {
    expect(bitcoin).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      bitcoin = mount(<Bitcoin {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});