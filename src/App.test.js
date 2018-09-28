import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('should test 1', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.onSelectionChanged({}), true);
});


it('should test', function () {

    const mockFunct = (data) => {
      console.log(data);
    };

    renderer.create(
        <App updateComponent = {mockFunct}/>
    );
});


