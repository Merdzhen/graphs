import React from 'react';
import {columnDefs, data, defaultColDef} from "./data";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import cls from './AgGridEnterpr.module.scss';

export default class AgGridEnterpr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columnDefs,
            defaultColDef,
        };
        this.gridRef = React.createRef();
        this.pushMeClicked = this.pushMeClicked.bind(this);
    }

    // cellClickedListener(e){
    //     console.log('cellclicked', e)
    // }

    pushMeClicked() {
        this.gridRef.current.api.deselectAll();
    }

    componentDidMount() {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then(result => result.json())
            .then(rowData => this.setState({data: rowData}))
            .catch(error => console.log(error))
    }

    render() {
        const { data, columnDefs, defaultColDef } = this.state;
        return (
            <div>
                <div>AgGrid table</div>
                <div className={`ag-theme-alpine ${cls.aggrid}`} >
                    <button onClick={this.pushMeClicked}>Reset selection</button>
                    <AgGridReact
                        ref={this.gridRef}
                        rowGroupPanelShow='always'
                        // onCellClicked={this.cellClickedListener}
                        rowData={data}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                    />
                </div>
            </div>
        );
    }
}
