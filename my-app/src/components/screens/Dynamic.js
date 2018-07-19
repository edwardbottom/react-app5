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
import {form} from './objects/formsWithData';

let formObj = new Object();
formObj.id = "sample-form";

let inputArray = [];
let i = new Object();
i.type = "text";
i.name = "username";
i.placeholder = "username";
let j = new Object();
j.type = "password";
j.name = "password";
j.placeholder = "password";
let k = new Object();
k.type = "text";
k.name = "type";
k.placeholder = "Type";
inputArray.push(i);
inputArray.push(j);
inputArray.push(k);

formObj.inputArray = inputArray;
//creates a screen using an array of component objects
// function createScreen(props){
//   if(props.length > 0){
//         return(
//           <div>
//             {props.map(inputObj => {
//               if(inputObj.type === "header"){
//                   return (
//                     <div>
//                       {header(inputObj)}
//                       <br/>
//                     </div>
//                 )
//                 }
//                 else if(inputObj.type == "headerAndDescription"){
//                   return (
//                     <div>
//                       {headerAndDescription(inputObj)}
//                     </div>
//                   ) 
//                 }
//                 else if(inputObj.type == "linksPanel"){
//                   return(
//                     <div>
//                       {linksPanel(inputObj)}
//                     </div>
//                   )
//                 }
//                 else if(inputObj.type =="createPanels"){
//                   return(
//                     <div>
//                       {createPanels(inputObj.list)}
//                     </div>
//                   )
//                 }
//               return null
//             })}
//          </div>
//         )
//       }
//   else{
//     return (
//       <p> Not a valid props </p>
//     )
//   }     
// }

 function getProxy(event){
   axios.get("http://localhost:3004/navBarObj")
      .then(res => {
        const navBarObj = res.data;
      })
      alert("before request")
    axios.get("http://10.125.2.131/cdmt/dataService/WSSConfig")
    alert("before then")
    .then(res =>{
      alert("request reached")
      const returnData = res.data;
      alert(returnData);
      console.log(returnData);
    })
  }

export default class DynamicBodyScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {nav:this.props.navData,
      content:this.props.content
    };
  };

//, {
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin' :'*',
      //   'Access-Control-Allow-Methods' : 'GET'
      // }
     //}

//   //state life cycle
  componentDidMount() {
     // axios.get("http://10.125.2.131/cdmt/dataService/WSSConfig").then(res => {
     //    const budgetrequests = res.data;
     //    console.log(budgetrequests)
     //  })

     //  var string = "panel.json";

     // axios.post("http://10.125.2.131/cdmt/dataService/WSSConfig", string, {
     //    //add this header to the server
     //    headers: {
     //        'Content-Type' : 'text/plain; charset=UTF-8',
     //        'authorization' : 'hello world'
     //    }
     //  })
     //  .then(res => {
     //    const budgetrequests = res.data;
     //    console.log(budgetrequests)
     //  })
     //  .catch((err) => {
     //  console.log("AXIOS ERROR: ", err);
     //  })
   }

//   //renders the html
//   render() {
//     return (
//       <div>
//         {createNavBar(this.state.nav)}
//           {<div className="container">
//             {this.state.content && this.state.content.length && <div> {createScreen(this.state.content)} </div>}
//           </div>}
//       </div>
//     );
//   }

  createJson(event){
    var serialize = require('form-serialize');
    var form = document.querySelector('#sample-form');
    var obj = serialize(form, { hash: true });
    console.log(obj);
  }

 

  render(){
    return(
      <div>
        {form(formObj)}
        <button onClick={this.createJson}> Click </button>
      </div>
      )
  }
}


