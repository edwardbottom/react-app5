//imports react libraries and class imports
import React, { Component } from 'react';
import LoginForm from './objects/LoginForm';
import {panel, createPanels, centerPanel, collapsePanel} from './objects/panel';

let newsArray = [];
let obj = new Object();
let text = "News about CenturyLink";
newsArray.push(text);
newsArray.push(text);
newsArray.push(text);
newsArray.push(text);

function newsItem(props){
  //alert(props.text);
  return(
    <li> <h3>{props}</h3> </li>
  )
}
function createNews(props){
   return(
    <div>
      {props.map((pan, index) =>{
        {newsItem(pan)}
      })
    }
  </div>
  )
}

function newsList(props) {
  const listItems = props.map((text) =>
    <li>
      <h3>{text}</h3>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

//renders a static login screen
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //make a request for the announcements and set a state for 
    //announcements to render around
  }

  render() {
    return (
      <div>
        <div className="col-md-8">
          <img src="logo.png" alt="CenturyLink Logo" height="120" width="350"></img>
          <strong>
            <h1> WSS Announcements </h1>
          </strong>
          <p></p>
          <div className="col-md-9 well">
            {newsList(newsArray)}
          </div>
        </div>
        <div className="col-md-4">
          <br/>
          <br/>
          <center>
            <LoginForm/>
          </center>
        </div>
      </div>
    );
  }
}


