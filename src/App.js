import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model", checkboxSelection: true},
                {headerName: "Price", field: "price"}

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    onGridReady(event) {
        event.preventDefault();
        this.gridApi = event.api;
        this.gridColumnApi = event.columnApi;
        this.props.updateComponent(); //ignore this
    }

    onSelectionChanged(event) {
        let make = '';
        // event.preventDefault();
        event.api.getSelectedNodes().forEach((node) => {
            // alert(node.data.make);
            make += node.make;
            make += ',';
        });
        make=make.substring(0, make.length-1);
        this.props.updateComponent(make);


        /*this.gridApi.getSelectedNodes().forEach((node) => {
            alert(node.data.make);
            this.props.updateComponent(node.data.make);
        });*/
    }


    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                    width: '600px'
                }}
            >
                {/*<button onClick={this.onButtonClick}>Get selected rows</button>*/}
                <AgGridReact
                    id="myGrid"
                    onGridReady={this.onGridReady.bind(this)}
                    onSelectionChanged={this.onSelectionChanged.bind(this)}
                    rowSelection="multiple"
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }

    /*onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }*/
}

export default App;
