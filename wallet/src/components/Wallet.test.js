import React from 'react';
import { shallow } from 'enzyme';

// connect関数でラップされたコンポーネントの場合、
// Enzymeから利用するには、exportされたクラスに限定して、インポートする必要がある
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });
});