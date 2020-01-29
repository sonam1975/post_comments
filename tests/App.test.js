// Jest and Enzyme tutorial video: https://www.youtube.com/watch?v=tYMLXpOJtng&list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_

import React from 'react';
import {shallow} from 'enzyme';
import App from '../react-client/src/components/App.jsx';

// Set up a variable named component for reference of <App />
const setUp = (props={}) => {
    const component = shallow(<App {...props} />);
    return component;
}

describe('App Component', () => {

    let component;
    // beforeEach functions runs before the test
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        console.log(component.debug());
        const wrapper = component.find('WriteComment');
        expect(wrapper.length).toBe(1);
    });


    it('Should render an image of user', () => {
        const userImage = component.find('img');
        expect(userImage.length).toBe(1);
    });
});
