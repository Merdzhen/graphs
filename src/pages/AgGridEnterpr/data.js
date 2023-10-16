import PullComp from "./PullComp";
import React from "react";

export const columnDefs = [
  {field: 'athlete'},
  {field: 'age', cellRenderer: props => <><b>Age is:</b>{props.value}</>},
  {field: 'country',
    // rowGroup: true
  },
  {field: 'year', cellRendererSelector: props => {
    if (props.value == 2000) {
      return {component: PullComp}
    }
    if (props.value == 2004) {
      return {component: PullComp}
    }
  }},
  {field: 'date'},
  {field: 'sport'},
  {field: 'gold'},
  {field: 'silver'},
  {field: 'bronze'},
  {field: 'total'},

];

export const defaultColDef = {
  sortable: true,
  filter: true,
  enableRowGroup: true
}
