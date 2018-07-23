//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, collapsePanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import {input, modalLink, basicModal, modalButton} from './objects/forms';
import {request, get} from './services/requests';
import axios from 'axios';
import {createScreen} from './CreateScreen';

//random data
let one = new Object();
one.route = "#";
one.header = "Change User Password (modal)";
one.target = "#change-password-modal";
//one.body = "Changes a Users Password When Clicked";


let onee = new Object();
onee.route = "#";
onee.header = "Change User Password (non modal)";
//onee.target = "#change-password-modal";
onee.inputArray = [];
onee.body = "Changes a Users Password When Clicked";


let list = [];
list.push(one);

let textObj = new Object();
textObj.header = "User Tools";
textObj.description = "null";

let headerObj = new Object();
headerObj.header = "Work Flows";

let changePasswordModal = new Object();
changePasswordModal.header = "Change User Password";
changePasswordModal.id = "change-password-modal";
changePasswordModal.inputArray = [];
let username = new Object();
username.type = "text";
username.id = "username";
username.placeholder = "username";
let oldPassword = new Object();
oldPassword.type = "password";
oldPassword.id = "oldPassword";
oldPassword.placeholder = "old password";
let newPassword = new Object();
newPassword.type = "password";
newPassword.id = "newPassword";
newPassword.placeholder = "new password";
let reNewPassword = new Object();
reNewPassword.type = "password";
reNewPassword.id = "reNewPassword";
reNewPassword.placeholder = "new password";
changePasswordModal.inputArray.push(username);
changePasswordModal.inputArray.push(oldPassword);
changePasswordModal.inputArray.push(newPassword);
changePasswordModal.inputArray.push(reNewPassword);
onee.inputArray.push(username);
onee.inputArray.push(oldPassword);
onee.inputArray.push(newPassword);
onee.inputArray.push(reNewPassword);
onee.target="#change-user-password";
onee.description="Changes a Users Password When Clicked";
onee.id = "change-user-password";

let addToWorkFlowModal = new Object();
addToWorkFlowModal.header = "Add to Work Flow";
addToWorkFlowModal.id = "add-to-workflow-modal";
addToWorkFlowModal.inputArray = [];
let taskName = new Object();
taskName.type = "text";
taskName.id = "task";
taskName.placeholder = "Task Name";
let taskDescription = new Object();
taskDescription.type = "text";
taskDescription.id = "taskDescription";
taskDescription.placeholder = "Task Description";
addToWorkFlowModal.inputArray.push(taskName);
addToWorkFlowModal.inputArray.push(taskDescription);

let workFlowModalButton = new Object();
workFlowModalButton.target = "#add-to-workflow-modal";
workFlowModalButton.text = "Add to Work Flow"

let seperatePagePanel = new Object();
seperatePagePanel.header = "Change User Password (other page)";
seperatePagePanel.route = "/ChangePassword";





let newScreen = [];
let ManagerToolsHeader = new Object();
ManagerToolsHeader.type = "header";
ManagerToolsHeader.header = "Manager Tools";
newScreen.push(ManagerToolsHeader);
let managerToolsListObj = new Object;
managerToolsListObj.type = "createPanels";
let tList = [];
let AA = new Object();
AA.route = "AAUR";
AA.header = "AAUR (Access Another User(s) Resources) ";
AA.body = "AAUR (Access Another User(s) Resources) ";
tList.push(AA);
let del = new Object();
del.route = "Delegation";
del.header = "Delegation";
del.body = "Delegation";
tList.push(del);
let asd = new Object();
asd.route = "Re-enableUser";
asd.header = "Re-enable User (PCI)";
asd.body = "Re-enable User (PCI)";
tList.push(asd);
let asdf = new Object();
asdf.route = "DisplayMyPeople";
asdf.header = "Display My People";
asdf.body = "Display My People";
tList.push(asdf);
let asdfg = new Object();
asdfg.route = "DomainPasswordReset";
asdfg.header = "Domain Password Reset";
asdfg.body = "Domain Password Reset";
tList.push(asdfg);
managerToolsListObj.list = tList;
newScreen.push(managerToolsListObj);

let UserToolsHeader = new Object();
UserToolsHeader.type = "header";
UserToolsHeader.header = "Users Tools";
newScreen.push(UserToolsHeader);
let userToolsListObj = new Object;
userToolsListObj.type = "createPanels";
let uList = [];
let q = new Object();
q.route = "ConferencingRequest";
q.header = "Conferencing Request ***";
q.body = "Conferencing Request ***";
uList.push(q);
let d = new Object();
d.route = "DirectoryPhotoOpt-InOut";
d.header = "Directory Photo Opt-In/Out";
d.body = "Directory Photo Opt-In/Out";
uList.push(d);
let zxc = new Object();
zxc.route = "MobileIDCreation";
zxc.header = "Mobile ID Creation";
zxc.body = "Mobile ID Creation";
uList.push(zxc);
let v = new Object();
v.route = "MobileIDPasswordCreation";
v.header = "Mobile ID Password Creation";
v.body = "Mobile ID Password Creation";
uList.push(v);
let g = new Object();
g.route = "RACFPasswordReset";
g.header = "RACF Password Reset";
g.body = "RACF Password Reset";
uList.push(g);
let y = new Object();
y.route = "UnixPasswordReset";
y.header = "Unix Password Reset";
y.body = "Unix Password Reset";
uList.push(y);
let e = new Object();
e.route = "DomainPasswordReset";
e.header = "Domain Password Reset";
e.body = "Domain Password Reset";
uList.push(e);
let eb = new Object();
eb.route = "Zip Code Update Form";
eb.header = "Zip Code Update Form";
eb.body = "Zip Code Update Form";
uList.push(eb);
let eaq = new Object();
eaq.route = "SavisDomain";
eaq.header = "Savis Domain ---***";
eaq.body = "Savis Domain ---***";
uList.push(eaq);
userToolsListObj.list = uList;
newScreen.push(userToolsListObj);

//class to render the usertools screen
export default class UserToolsScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
    };
    this.state.navData.list[2].active = "true";
  };

  //state life cycle
  componentDidMount() {
      //axios.get(this.state.url)
      //.then(res => {
        //const content = res.data;
        //this.setState({ content });
      //})
  }

  render() {

    return (
      <div>
          {createNavBar(this.state.navData)}
          <div className="container">
            {headerAndDescription(textObj)}
            {header(headerObj)}
            {modalButton(workFlowModalButton)}
            <br/>
            <br/>
            {panel(seperatePagePanel)}
            {collapsePanel(onee)}
            {basicModal(changePasswordModal)}
            {basicModal(addToWorkFlowModal)}
            {createPanels(list)}
            {createScreen(newScreen)}
          </div>
      </div>
    );
  }
}


