import React from 'react';
import {shallow} from 'enzyme';
import Card from '../components/Card';

describe('<Card />', () => {
	it('renders components', () => {
		const wrapper = shallow(<Card />);
		// expect(wrapper.length).toEqual(1);
		expect(wrapper.debug()).toMatchSnapshot();
		// expect(wrapper.find(Foo)).to.have.lengthOf(3);
	});

	// it('renders an `.icon-star`', () => {
	// 	const wrapper = shallow(<Card />);
	// 	expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
	// });

	// it('renders children when passed in', () => {
	// 	const wrapper = shallow(
	// 		<Card>
	// 			<div className="unique" />
	// 		</Card>,
	// 	);
	// 	expect(wrapper.contains(<div className="unique" />)).to.equal(true);
	// });

	// it('simulates click events', () => {
	// 	const onButtonClick = sinon.spy();
	// 	const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
	// 	wrapper.find('button').simulate('click');
	// 	expect(onButtonClick).to.have.property('callCount', 1);
	// });
});
