import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from 'react-toolbox/lib/button';
import Footer from 'examples/Todo/components/Footer';

describe('<Footer />', () => {
  it ('renders 2 buttons', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Button)).to.have.length(2);
  });
});