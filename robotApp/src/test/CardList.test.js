import React from 'react';
import {shallow} from 'enzyme';
import CardList from '../components/CardList';

describe('<CardList />', () => {
	const robotsMock = [{id: 2, name: 'test', email: 'test@yahoo.com'}];
	it('renders components', () => {
		const wrapper = shallow(<CardList robots={robotsMock} />);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});
