//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels, centerPanelWithRows, centerPanelWithTable, collapsePanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import axios from 'axios';
import {modalButton, basicModal} from './objects/forms';
import {get, post, processRequest} from './services/requests';
import {textGroup, textGroups, textArea, singleSelect, multipleSelect, radioForm, checkBox} from './objects/FormGroup';

//creates a screen using an array of component objects
function createScreen(props){
  if(props.length > 0){
        return(
          <div>
            {props.map(inputObj => {
              if(inputObj.type === "header"){
                  return (
                    <div>
                      {header(inputObj)}
                      <br/>
                    </div>
                )
                }
                else if(inputObj.type == "headerAndDescription"){
                  return (
                    <div>
                      {headerAndDescription(inputObj)}
                    </div>
                  ) 
                }
                else if(inputObj.type == "linksPanel"){
                  return(
                    <div>
                      {linksPanel(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.type =="createPanels"){
                  return(
                    <div>
                      {createPanels(inputObj.list)}
                    </div>
                  )
                }
              return null
            })}
         </div>
        )
      }
  else{
    return (
      <p> Not a valid props </p>
    )
  }     
}

function foo(props){
  alert("the handler was reached");
}

export default class DynamicBodyScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {nav:this.props.navData,
      content:this.props.content
    };
  };

  //state life cycle
  componentDidMount() {
  }
  //renders the html
  /*render() {
    return (
      <div>
        {createNavBar(this.state.nav)}
          {<div className="container">
            {this.state.content && this.state.content.length && <div> {createScreen(this.state.content)} </div>}
          </div>}
      </div>
    );
  }*/

  onItemClick(event) {
    var serialize = require('form-serialize');
    var form = document.querySelector('#example-form');
    var obj = serialize(form, { hash: true });
    alert(obj.something);
    axios.get("http://localhost:3004/budgetrequests")
      .then(res => {
        const budgetrequests = res.data;
        alert(budgetrequests);
      })
  }

  render(){
    return(
      <form id="example-form">
        <input type="text" name="something"/>
        <a href="/home" role="button" onClick={this.onItemClick} className="btn btn-success">Login</a>
      </form>
      )
  }
}


