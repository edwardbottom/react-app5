import React, { Component } from 'react';
import {textGroup, textGroups, selectOption, 
	singleSelect, multipleSelect, textArea, 
	radioOption, radioForm, checkBox, button,
  dropDownButtonRequest, confirmButtons} from './objects/FormGroup';
import {createNavBar} from './objects/navbar';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {dropDownButton} from './objects/buttons';

//random data
var objArray = [];
objArray.id = "objectData";
var h = new Object();
h.type = "header";
h.header = "New Application Access Request Form";
objArray.push(h);

var t = new Object();
t.type = "text";
t.align = "center";
t.text = "Search Type:";
objArray.push(t);

var esso = new Object();
esso.label = "Human Request";
var radio = new Object;
radio.label = "Non-Human Request";
var rArray = [];
rArray.push(esso);
rArray.push(radio);
var something = new Object();
something.type = "radioForm";
something.inputArray = rArray;
objArray.push(something);

var textBoxes = [];
textBoxes.align = "left";
textBoxes.inline = true;
var textBox = new Object();
textBox.id = "last_name";
textBox.label = "Last Name";
textBox.type = "text";
textBox.placeholder = "Last Name";
textBox.size = "large";
textBoxes.push(textBox);
var oBox = new Object();
oBox.id = "first_name";
oBox.label = "First Name";
oBox.type = "text";
oBox.placeholder = "First Name";
oBox.size = "small";
textBoxes.push(oBox);
var aBox = new Object();
aBox.id = "sap_id";
aBox.label = "SAP ID";
aBox.type = "text";
aBox.placeholder = "SAP ID";
aBox.size = "small";
textBoxes.push(aBox);
var qBox = new Object();
qBox.id = "adid";
qBox.label = "ADID";
qBox.type = "text";
qBox.placeholder = "Use a comma for multiple ADID";
qBox.size = "medium";
textBoxes.push(qBox);


var ttt = new Object();
ttt.align = "right";
ttt.type = "textGroups";
ttt.inputArray = textBoxes;
ttt.inline = true;
objArray.push(ttt);

var rButton = new Object();
rButton.id = "searchComplex";
rButton.text = "Search";
rButton.type = "button";
rButton.class = "btn btn-success";
rButton.align = "textAlign:'right'";
objArray.push(rButton);

var mObject = new Object();
mObject.type = "multipleSelects";
mObject.inline = true;
mObject.label = "Search Results";
var iArray = [];
var o12 = new Object();
o12.label = "A user from the database via the search";
o12.name = "multiselect[]";
iArray.push(o12);
iArray.push(o12);
iArray.push(o12);
iArray.push(o12);
mObject.inputArray = iArray;
objArray.push(mObject);

var check = new Object();
check.type = "button";
check.class = "btn btn-success";
check.align = "center";
check.id = "stageChangesButton";
check.text= "Stage Changes";
objArray.push(check);

var sButton = new Object();
sButton.type = "confirmButtons";
sButton.route = "/accessrequest"
sButton.formId = "#" + "objectData";
// objArray.push(sButton);


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
      formId: "#objectData"
    };
  };

  //state life cycle
  componentDidMount() {
    //use data to signify request to make request for content and then render page around it
  }

  submitForm(){
    var serialize = require('form-serialize');
    var form = document.querySelector('#objectData');
    var obj = serialize(form, { hash: true });
    console.log(obj);
  }  

  render() {
    return (
      	<center>
          <div className="container">
            {createComplexForm(objArray)}
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



