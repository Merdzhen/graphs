import React from 'react';
import {columnDefs, data, defaultColDef} from "./data";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import cls from './AgGrid.module.scss';

export default class AgGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            columnDefs,
            defaultColDef,
        };
        this.gridRef = React.createRef();
        this.pushMeClicked = this.pushMeClicked.bind(this);
    }

    // cellClickedListener = (e) => {
    //     console.log('cellclicked', e)
    // }

    cellClickedListener(e){
        console.log('cellclicked', e)
    }

    pushMeClicked() {
        this.gridRef.current.api.deselectAll();
    }

    componentDidMount() {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
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
                        onCellClicked={this.cellClickedListener}
                        rowData={data}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        rowSelection='multiple'
                        animateRows={true}
                    />
                </div>
            </div>
        );
    }
}
