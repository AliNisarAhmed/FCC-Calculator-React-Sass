import Button from '../../src/components/Button';
import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test('Button should render correctly', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
})