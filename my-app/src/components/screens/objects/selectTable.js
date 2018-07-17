import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css'
import {modalButton, infoModal} from './forms.js';



//random data
let modalB = new Object();
modalB.target = "#modalBLink";
modalB.text = "Submit";

let infoB = new Object();
infoB.id = "modalBLink";
infoB.description = "Do you want to submit the selected tasks?";


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



//global variable to track the number of rows selected using 
//event handlers
var totalSelected = 0;

//handler if a single row is selected in a table
function onRowSelect(row, isSelected, e, rowIndex) {
  if(isSelected){
    ++totalSelected;
    if(totalSelected == 2){
      alert("You have more than one item selected, please confirm that you want to submit all of these items before submitting them ");
    }
  }
  else{
    --totalSelected;
  }
}

//handler if all the rows are selected in the table
function onSelectAll(isSelected, rows) {
  if(isSelected){
    totalSelected += rows.length;
    alert("You have more than one item selected, please confirm that you want to submit all of these items before submitting them ");
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
    // alert(totalSelected)
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
      <div>
        <BootstrapTable data={ products } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' hidden = {true} isKey></TableHeaderColumn>
          <TableHeaderColumn dataField='Task'>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='Description'>Request</TableHeaderColumn>
        </BootstrapTable>
        <center>
          {modalButton(modalB)}
        </center>
        {infoModal(infoB)}
      </div>
    );
  }
}