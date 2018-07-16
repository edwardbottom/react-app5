import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio,inline,Form} from 'react-bootstrap';

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
	return(
		  <FormGroup inline controlId={props.id}>
    		<ControlLabel>{props.label}</ControlLabel>{' '}<br/>
        {/*insert a name property here*/}
    		<FormControl type={props.type} name={props.id} bsSize={props.size} placeholder={props.placeholder} />{' '}
    		<div class="divider"/>
  		</FormGroup>
      
	)
}

//function that uses an array of textGroup objects to create a form
export function textGroups(props){
  if(props.hasOwnProperty("inline")){
    return(
      <div>
        <Form inline>
          <div class="form-group row">
            {props.inputArray.map((inputObj, index) =>
              textGroup(inputObj)
            )}
          </div>
        </Form>
      </div>
    )
  }
  else{
    return(
      <div>
        <Form>
          <div class="form-group row">
            {props.inputArray.map((inputObj, index) =>
              textGroup(inputObj)
            )}
          </div>
        </Form>
      </div>
    )
  }
}

//helper function that creates a option for single and multiple select forms
//add a name property to this function
function selectOption(props){
	return(
        <option value="select">{props.label}</option>
    )
}

//creates a drop down menue to select one option 
export function singleSelect(props){
	return(
		<FormGroup controlId="formControlsSelect">
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        {props.inputArray.map((inputObj, index) =>
        	selectOption(inputObj)
      	)}
      	<option value="other">...</option>
      </FormControl>
    </FormGroup>
	)
}

//creates a table to select multiple objects
export function multipleSelect(props){
	return(
		<FormGroup controlId="formControlsSelectMultiple">
			<p><strong>{props.label}</strong></p>
      		<FormControl componentClass="select" multiple>
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
		<FormGroup controlId="formControlsTextarea">
      		<ControlLabel>{props.label}</ControlLabel>
      		<FormControl componentClass="textarea" placeholder="textarea" />
    	</FormGroup>
	)
}

//helper function that creates a single option in a radio form
//modify name values
function radioOption(props){
  if(props.hasOwnProperty("inline")){
    return(
      <Radio name="radioGroup" inline>
          {props.label}
        </Radio>
    )
  }
  else{
    return(
      <Radio name="radioGroup">
          {props.label}
        </Radio>
    )
  }
}

//uses an array of radioOption objects to create a radio form
export function radioForm(props){
	return(
    <div>
			<FormGroup>
		 		{props.inputArray.map((inputObj, index) =>
        		radioOption(inputObj)
      	 )}
    	</FormGroup>
    	<br/>
    </div>
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

