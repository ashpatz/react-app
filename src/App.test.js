import React from 'react';
import App from './App';

import {shallow} from 'enzyme';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16.1');
Enzyme.configure({adapter: new EnzymeAdapter()});

describe('grid component', () => {
    let wrapper;
    const mockFunc = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<App updateComponent={mockFunc}/>);
        mockFunc.mockClear();
    });

    it('should initialize grid', () => {
        const agGridReact = wrapper.find('#myGrid');
        agGridReact.simulate('gridReady', {
            preventDefault() {
            }
        });
        expect(mockFunc.mock.calls.length).toBe(1);
    });

    it('should show selected items', () => {


        const rowData = [
            {data: {make: "Toyota", model: "Celica", price: 35000}},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
            ];

        const agGridReact = wrapper.find('#myGrid');
        agGridReact.simulate('selectionChanged', {
            preventDefault() {
            },
            api: {
                getSelectedNodes(){
                    return [rowData[0], rowData[2]];
                }
            }
        });
        expect(mockFunc.mock.calls.length).toBe(1);
        expect(mockFunc.mock.calls[0][0]).toEqual('Toyota,Porschea');
    });
});

describe('sample test', () => {

    const addnumbers = (a, b) => {
        return a + b;
    };

    it('should match', function () {
        expect(addnumbers(4, 5)).toBe(9);
    });
});


