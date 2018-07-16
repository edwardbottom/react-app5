import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css'

//data structure to store data
const products = [];

//function to add iteams to the data structure
//todo: add in api calls
function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      Task: 'A Task'+id,
      Description: 'with a Description'
    });
  }
}

addProducts(3);


var totalSelected = 0;

function onRowSelect(row, isSelected, e, rowIndex) {
  console.log(row)
  console.log(isSelected)
  console.log(e)
  console.log(rowIndex)
  if(isSelected){
    ++totalSelected;
  }
  else{
    --totalSelected;
  }
}

function onSelectAll(isSelected, rows) {
  console.log(isSelected)
  console.log(rows)
  if(isSelected){
    totalSelected += rows.length;
  }
  else{
    totalSelected -= rows.length;
  }
}

//table color setup
const selectRowProp = {
  mode: 'checkbox',
  bgColor: '#bbff99',
  mode: 'checkbox',
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

//class for a table with selection options
export default class SelectBgColorTable extends React.Component {

  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {
      selected:0
    };
    alert(totalSelected)
  };

  // //state life cycle
  componentDidMount() {
    // axios.get(someURL)
    //   .then(res => {
    //     this.setState({ content });
    //   })
    //alert(this.state.totalSelected);
  }

  render() {
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' hidden = {true} isKey></TableHeaderColumn>
          <TableHeaderColumn dataField='Task'>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='Description'>Request</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}