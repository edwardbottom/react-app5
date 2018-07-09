import React, { Component } from 'react';

function input(props){
	if(props.hasOwnProperty("type") && props.hasOwnProperty("name") && props.hasOwnProperty("placeholder")){
    return(
      <div>
        <input type={props.type} name={props.name} placeholder={props.placeholder}></input><br/><br/>
      </div>
    );
  }
	else if(props.hasOwnProperty("type") && props.hasOwnProperty("name") && props.hasOwnProperty("class") && props.hasOwnProperty("value")){
    return(
      <div>
        <input type={props.type} name={props.name} className={props.placeholder} value={props.value}></input><br/><br/>
      </div>
    );
  }
  else if(props.hasOwnProperty("type") && props.hasOwnProperty("name") && props.hasOwnProperty("name")){
    return(
      <div class="radio">
        <label><input type={props.type} className={props.class} name={props.name}>Non-Human Request</input></label><br/><br/>
      </div>
    );
  }
}

export function form(props){
	return(
		<div>
			<form id={props.id}>
				{props.inputArray.map((inputObj, index) =>
        			input(inputObj)
      			)}
      			<label>H: <input type="radio" name="test" value="h" /> </label>
    			<label>G: <input type="radio" name="test" value="g" /> </label>
			</form>
		</div>
	);
}

