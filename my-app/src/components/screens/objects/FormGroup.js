import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio,inline,Form} from 'react-bootstrap';
import axios from 'axios';
var serialize = require('form-serialize');


//creates a group of input objects
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

//helper function that creates a single textbox
//todo: add in a name property for this so it can be synthesized into a json object
export function textGroup(props){
  if(props.size == "large"){
    return(
        <div className="col-xs-4">
          <center>
            <label for="ex1">{props.label}</label>
          </center>
          <input className="form-control" name={props.id} type="text" placeholder={props.placeholder}/>
        </div>
    )
  }
  else if(props.size == "small"){
    return(
      <div className="col-xs-2">
        <center>
          <label for="ex1">{props.label}</label>
        </center>
        <input className="form-control" name={props.id} type="text" placeholder={props.placeholder}/>
      </div>
    )
  }
	return(
        <div className="col-xs-3">
          <center>
            <label for="ex1">{props.label}</label>
          </center>
          <input className="form-control" name={props.id} type="text" placeholder={props.placeholder}/>
        </div>
	)
}

//function that uses an array of textGroup objects to create a form
export function textGroups(props){
  if(props.hasOwnProperty("inline")){
    return(
      <form id={props.id}>
          <div className="form-group row">
            {props.inputArray.map((inputObj, index) =>
              textGroup(inputObj)
            )}
          </div>
      </form>
    )
  }
  else{
    return(
      <form id={props.id}>
        <div className="form-group">
          {props.inputArray.map((inputObj, index) =>
            textGroup(inputObj)
          )}
        </div>
      </form>
    )
  }
}

//helper function that creates a option for single and multiple select forms
//add a name property to this function
function selectOption(props){
  //if(props.hasOwnProperty(props.selected)){
    return(
      <option value={props.label} name={props.name}>{props.label}</option>
      )
}

//creates a drop down menue to select one option 
export function singleSelect(props){
	return(
    <form id={props.id}>
		  <FormGroup controlId="formControlsSelect">
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          {props.inputArray.map((inputObj, index) =>
        	 selectOption(inputObj)
      	 )}
      	 <option value="other">...</option>
        </FormControl>
      </FormGroup>
    </form>
	)
}

//creates a table to select multiple objects
export function multipleSelect(props){
	return(
		<FormGroup controlId="formControlsSelectMultiple">
			 <p><strong>{props.label}</strong></p>
      	<FormControl componentClass="select" multiple name="search">
        	{props.inputArray.map((inputObj, index) =>
        			selectOption(inputObj)
      		)}
        	<option value="other">...</option>
      	</FormControl>
      <div class="divider"/>
      <div class="divider"/>
    </FormGroup>
	)
}

//creates a large textbox
//add a name property
export function textArea(props){
	return(
    <form id={props.id}>
		  <FormGroup controlId="formControlsTextarea">
      		<ControlLabel>{props.label}</ControlLabel>
      		<FormControl componentClass="textarea" placeholder="textarea" />
    	</FormGroup>
    </form>
	)
}

//helper function that creates a single option in a radio form
//modify name values
function radioOption(props){
  if(props.hasOwnProperty("inline")){
    return(
      <Radio name={props.name} inline value={props.label}>
          {props.label}
        </Radio>
    )
  }
  else{
    return(
      <Radio name={props.name} value={props.label}>
          {props.label}
        </Radio>
    )
  }
}

//uses an array of radioOption objects to create a radio form
export function radioForm(props){
	return(
    <form id={props.id}>
			<FormGroup>
		 		 {props.inputArray.map((inputObj, index) =>
        		radioOption(inputObj)
      	 )}
    	</FormGroup>
    	<br/>
    </form>
	)
}

//creates a single check box with a label
export function checkBox(props){
	return(
		<div align={props.align}>
		 	<Checkbox>
      			{props.label}
    		</Checkbox>
    	</div>
	)
}

//todo: update json objects for handlers and callback
//creates a button aligned to the right side of the screen
export function button(props){
  if(props.align == "left"){
    return(
      <div className="form-group" style={{textAlign:'left'}}>
        <button type="button" className={props.class} id={props.id}>{props.text}</button>
      </div>
    )
  }
  else if(props.align == "center"){
     return(
      <div className="form-group" style={{textAlign:'center'}}>
        <button type="button" className={props.class} id={props.id}>{props.text}</button>
      </div>
    )
  }
  else{
    return(
      <div className="form-group" style={{textAlign:'right'}}>
        <button type="button" className={props.class} id={props.id}>{props.text}</button>
      </div>
    )
  }
}

//helper function that creates a option in a drop down menue
function dropDown(props){
  return(
    <li><a href={props.link}>{props.text}</a></li>
    )
}

//function that sends a request to get an array of drop down Objects and appends
//them to a drop down button
export function dropDownButtonRequest(props){
  const url = props.url;
  axios.get(url)
  .then(res => {
    const responseObject = res.data;
    console.log(responseObject)
    return(
      <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
          {props.text}<span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          {props.inputArray.map((inputObj, index) =>
            dropDown(inputObj)
         )}
        </ul>
      </div>
    )
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
    return (<p> request failed to get dropDown </p>);
  })
}

//handler to submit a form
function submitForm(props){
  let form = document.querySelector(props.formId);
  var obj = JSON.stringify(serialize(form, { hash: true }));
  console.log(obj);
}

//creates the buttons to submit a form or leave a form
export function confirmButtons(props){
  return(
    <div className="bottomButtons">
      <div className="row">
        <div className="col-xs-5 col-xs-offset-9">
          {/*<a href={props.route}>*/}
            <button className="btn btn-success" 
              onClick= {this.submitForm(props)}>Submit
            </button>
          {/*</a>*/}
        </div><br/><br/>
        <div className="col-xs-5 col-xs-offset-9">
          <a href={props.route} className="btn btn-primary">Cancel</a>
        </div>
      </div>
    </div>
  )
}
