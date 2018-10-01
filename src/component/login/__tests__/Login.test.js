import React from 'react';
import { shallow } from 'enzyme';
import {Login} from '../Login';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16.1');
Enzyme.configure({ adapter: new EnzymeAdapter() });

/*import configureStore from 'redux-mock-store'
const initialState = {};
const mockStore = configureStore();
let store;*/


describe('Login Component', () => {
    let wrapper;
    // our mock login function to replace the one provided by mapDispatchToProps
    const mockLoginfn = jest.fn();

    beforeEach(() => {
        // pass the mock function as the login prop
        // store = mockStore(initialState);
        wrapper = shallow(<Login login={mockLoginfn}/>);
    });

    describe('When the form is submitted', () => {
        it('should call the mock login function', () => {
            wrapper.find('#loginForm').simulate(
                'submit',
                {preventDefault() {}}
            );
            expect(mockLoginfn.mock.calls.length).toBe(1);
        });


        it('should be called with the email and password in the state as arguments', () => {
            // fill in email field with blah@gmail.com
            wrapper.find('#email').simulate(
                'change',
                {target:
                        {name: 'email', value: 'blah@gmail.com'}
                }
            )
            // fill in password field with cats
            wrapper.find('#password').simulate(
                'change',
                {target:
                        {name: 'password', value: 'cats'}
                }
            )
            // simulate form submission
            wrapper.find('#loginForm').simulate(
                'submit',
                {preventDefault() {}}
            )
            // test to see arguments used after its been submitted
            expect(mockLoginfn.mock.calls[1][0]).toEqual(
                {email: 'blah@gmail.com', password: 'catsa'}
            )
        });

    });

});


describe('sample test', ()=> {

    const addnumbers = (a,b) => {
        return a + b;
    };

    it('should match', function () {
        expect(addnumbers(4,5)).toBe(9);
    });
});



