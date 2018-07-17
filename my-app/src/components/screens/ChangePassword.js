//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import {formGroup, formGroups, buttonWithRoute} from './objects/forms';
import axios from 'axios';


//random data
let formGroup1 = new Object();
formGroup1.label = "Username: ";
formGroup1.type = "text";
formGroup1.id = "usr";
let formGroup2 = new Object();
formGroup2.label = "Old Password: ";
formGroup2.type = "password";
formGroup2.id = "opass";
let formGroup3 = new Object();
formGroup3.label = "New Password: ";
formGroup3.type = "password";
formGroup3.id = "npass";
let formGroup4 = new Object();
formGroup4.label = "ReRenter New Password";
formGroup4.type = "password";
formGroup4.id = "rnpass";

let formGroupArray = [];
formGroupArray.push(formGroup1);
formGroupArray.push(formGroup2);
formGroupArray.push(formGroup3);
formGroupArray.push(formGroup4);

let formGroupObj = new Object();
formGroupObj.inputArray = formGroupArray;

let confirmButton = new Object();
confirmButton.route = "/usertools";
confirmButton.class = "btn btn-success";
confirmButton.label = "Submit";
let cancelButton = new Object();
cancelButton.route = "/usertools";
cancelButton.class = "btn btn-primary";
cancelButton.label = "Cancel";

//renders the access request screen
export default class ChangePasswordScreen extends React.Component {
  createJson(event){
    var serialize = require('form-serialize');
    var form = document.querySelector('#p-form');
    var obj = serialize(form, { hash: true });
    console.log(obj);
    axios.post('http://localhost:3004/', obj);
  }

  render() {
    return (
      <div>
        <div className="container">
          <form id="p-form">
            {formGroups(formGroupObj)}
            {buttonWithRoute(cancelButton)}
            <div class="divider"/>
            {/*buttonWithRoute(confirmButton)*/}
            <a href={"/usertools"}>
              <button className="btn btn-success" 
                onClick= {this.createJson}>Submit
              </button>
            </a>
          </form>
        </div>
      </div>
    );
  }
}


