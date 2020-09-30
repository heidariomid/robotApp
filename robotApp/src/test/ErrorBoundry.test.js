import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundry from '../components/ErrorBoundry';

describe('<ErrorBoundry />', () => {
	it('renders components', () => {
		const wrapper = shallow(<ErrorBoundry />);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});
