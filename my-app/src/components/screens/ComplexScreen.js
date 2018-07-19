import React, { Component } from 'react';
import {textGroup, textGroups, selectOption, 
	singleSelect, multipleSelect, textArea, 
	radioOption, radioForm, checkBox, button,
  dropDownButtonRequest, confirmButtons} from './objects/FormGroup';
import {createNavBar} from './objects/navbar';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {dropDownButton} from './objects/buttons';
import axios from 'axios';


//creates text from an object passed in
function text(props){
	return (
		<div>
			<strong><p> {props.text}</p></strong>
		</div>
	)
}

//creates a form using an array with form objects
function createComplexForm(props){
	if(props.length > 0){
        return(
        	<form id = "objectData">
            {/*iterates through the array*/}
      			{props.map(inputObj => {
        			if(inputObj.type === "header"){
                if(inputObj.align == "left"){
                  return (
                    <div style={{textAlign:'left'}}>
                      {header(inputObj)}
                      <br/>
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return (
                    <div style={{textAlign:'right'}}>
                      {header(inputObj)}
                      <br/>
                    </div>
                  )
                }
                return (
          				<div>
           					{header(inputObj)}
           					<br/>
           				</div>
         				)
          		}
          		else if(inputObj.type == "headerAndDescription"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {headerAndDescription(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {headerAndDescription(inputObj)}
                    </div>
                  )
                }
          			return (
          				<div>
          					{headerAndDescription(inputObj)}
          				</div>
          			)	
        			}
        			else if(inputObj.type == "textGroup"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {textGroup(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {textGroup(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{textGroup(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "textGroups"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {textGroups(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {textGroups(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{textGroups(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "singleSelect"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {singleSelect(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {singleSelect(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{singleSelect(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "multipleSelect"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {multipleSelect(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {multipleSelect(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{multipleSelect(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "multipleSelects"){
                if(inputObj.hasOwnProperty("inline")){
                  if(inputObj.align == "left"){
                    return(
                      <div class="form-inline" style={{textAlign:'left'}}>
                        {multipleSelect(inputObj)}
                        {multipleSelect(inputObj)}
                      </div>
                    )
                  }
                  else if(inputObj.align == "right"){
                    return(
                      <div class="form-inline" style={{textAlign:'right'}}>
                        {multipleSelect(inputObj)}
                        {multipleSelect(inputObj)}
                      </div>
                    )
                  }
                  return(
                    <div class="form-inline">
                      {multipleSelect(inputObj)}
                      {multipleSelect(inputObj)}
                    </div>
                  )
                }
        				else{
                  if(inputObj.align == "left"){
                    return(
                      <div style={{textAlign:'left'}}>
                        {multipleSelect(inputObj)}
                        {multipleSelect(inputObj)}
                      </div>
                    )
                  }
                  else if(inputObj.align == "right"){
                    return(
                      <div style={{textAlign:'right'}}>
                        {multipleSelect(inputObj)}
                        {multipleSelect(inputObj)}
                      </div>
                    )
                  }
                  return(
                    <div>
                      {multipleSelect(inputObj)}
                      {multipleSelect(inputObj)}
                    </div>
                  )
                }
        			}
        			else if(inputObj.type == "textArea"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {textArea(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {textArea(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{textArea(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "radioForm"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {radioForm(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {radioForm(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{radioForm(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "checkBox"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {checkBox(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {checkBox(inputObj)}
                    </div>
                  )
                }
        				return (
          					<div>
          						{checkBox(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "text"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {text(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {text(inputObj)}
                    </div>
                  )
                }
        				return(
        					<div>
        						{text(inputObj)}
        					</div>
        				)
        			}
        			else if(inputObj.type == "button"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {button(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {button(inputObj)}
                    </div>
                  )
                }
        				return(
        					<div>
                    <br/>
        						{button(inputObj)}
        					</div>
        				)
        			}
        			else if(inputObj.type == "confirmButtons"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {confirmButtons(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {confirmButtons(inputObj)}
                    </div>
                  )
                }
        				return(
        					<div>
        						{confirmButtons(inputObj)}
        					</div>
        				)
        			}
        			else if(inputObj.type == "check"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {checkBox(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {checkBox(inputObj)}
                    </div>
                  )
                }
        				return(
        					<div>
        						{checkBox(inputObj)}
        					</div>
        					)
        			}
              else if(inputObj.type == "dropDownButtonSmall"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {dropDownButton(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {dropDownButton(inputObj)}
                    </div>
                  )
                }
                return(
                  <div>
                    {dropDownButton(inputObj)}
                  </div>
                  )
              }
              else if(inputObj.type == "dropDownButtonRequest"){
                if(inputObj.align == "left"){
                  return(
                    <div style={{textAlign:'left'}}>
                      {dropDownButtonRequest(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.align == "right"){
                  return(
                    <div style={{textAlign:'right'}}>
                      {dropDownButtonRequest(inputObj)}
                    </div>
                  )
                }
                return(
                  <div>
                    {dropDownButtonRequest(inputObj)}
                  </div>
                  )
              }
        			return null
      			})}
   			 </form>
        	)
      }
	else{
		return (
			<p> Not a valid props </p>
		)
	}   	
}

//renders the access request screen
export default class ComplexScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {
      content:null,
      ids:[]
    };
  };

  //state life cycle
  componentDidMount() {
    axios.get("http://localhost:3004/dynamic-form")
      .then(res => {
        const content = res.data;
        this.setState({ content });
        console.log(this.state.content);
        for(let i = 0; i < content.length; i++){
          if(content[i].hasOwnProperty("id")){
            this.state.ids.push(content[i].id);
            console.log(content[i].id)
          }
        }
        console.log(this.state.ids)
      })
  }

  //creates a json object using the existing dynamic form
  submitForm(){
    var serialize = require('form-serialize');
    var form = document.querySelector('#objectData');
    var obj = serialize(form, { hash: true });
    console.log(obj);

    //only run for when multiselect exists
    //consider changing to flux architecture
    let options = document.getElementById("formControlsSelectMultiple").options;
    console.log(options)
    let vals = [];
    for(let i = 0; i < options.length; i++){
      vals.push(options[i].innerText);
    }
    // console.log(vals);
    // console.log(JSON.stringify(vals));
    obj.selected = JSON.stringify(vals);
    console.log(obj)
  }  

  render() {
    return (
      	<center>
          <div className="container">
            {this.state.content && createComplexForm(this.state.content)}
            {/*buttons to submit form and cancel form*/}
            <div className="bottomButtons">
              <div className="row">
                <div className="col-xs-5 col-xs-offset-9">
                  {/*<a href={props.route}>*/}
                    <button className="btn btn-success" 
                      onClick= {this.submitForm}>Submit
                    </button>
                  {/*</a>*/}
                </div><br/><br/>
                <div className="col-xs-5 col-xs-offset-9">
                  <a href={"/accessrequest"} className="btn btn-primary">Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </center>
    );
  }
}



