import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from '../components/CounterButton';

describe('<CounterButton />', () => {
	it('renders components', () => {
		const colorMock = 'red';
		const wrapper = shallow(<CounterButton color={colorMock} />);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('renders correctly', () => {
		const colorMock = 'red';
		const wrapper = shallow(<CounterButton color={colorMock} />);
		wrapper.find('[id=1]').simulate('click');
		wrapper.find('[id=1]').simulate('click');
		expect(wrapper.state()).toEqual({count: 2});
		expect(wrapper.props().color).toEqual('red');
	});
});
