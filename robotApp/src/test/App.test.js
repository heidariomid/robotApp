import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import App from '../containers/App';

describe('<App />', () => {
	let middlewares;
	let wrapper;
	let mockStore;
	let initialState;
	let store;
	beforeEach(() => {
		middlewares = [];
		mockStore = configureStore(middlewares);
		initialState = {onRequestRobots: jest.fn(), searchField: '', robots: [], isPending: false};
		store = mockStore(initialState);
		wrapper = shallow(<App store={store} />);
	});

	it('renders components', () => {
		expect(wrapper.debug()).toMatchSnapshot();
	});
	it('filteredRobots', () => {
		expect(wrapper.instance().filteredRobots([])).toEqual([]);
	});
});
