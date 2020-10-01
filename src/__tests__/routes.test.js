import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../routes';

describe('Test suite to check route is rendered', () => {
    it('Test case to check application snapshot matches', () => {
        const Route = shallow(<Routes />);
        expect(Route).toMatchSnapshot();
    })
})