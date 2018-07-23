//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {createNavBar} from './objects/navbar';
import {createPills} from './objects/pills';

//random data
let headerObj = new Object();
headerObj.header = "Search Results";

let passwordSearch = new Object();
passwordSearch.route = "/ChangePassword";
passwordSearch.header = "tools --> Change User Password";

let one = new Object();
one.route = "link";
one.header = "Revision to Furniture, Equipment, and Vehicle Budget Requests";
one.body = "Used to add or delete a resource from the company or department budget.";
let two= new Object();
two.route = "link";
two.header = "Vehicle Change/Transfer Request"
two.body = "Used to transfer a vehicle to a new driver and company or department"


let list = [];
list.push(passwordSearch);
list.push(one);
list.push(two);

//renders the screen for my tasks
export default class SearchScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {nav:this.props.navData
    };
  };

  //state life cycle
  componentDidMount() {
  }

  render() {
    return (
      <div>
          {createNavBar(this.state.nav)}
          <div className="container">
            <div id="Search_Screen">
              <div className="container">
                {header(headerObj)}
                {createPanels(list)}
              </div>
            </div>
          </div>
      </div>
    );
  }
}


