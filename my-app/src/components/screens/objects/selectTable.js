import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css'


const products = [];

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

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink'
};

export default class SelectBgColorTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='Task' isKey={true}>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='Description'>Request</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}