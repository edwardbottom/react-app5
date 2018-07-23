//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels, centerPanelWithRows, centerPanelWithTable} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';


//random data
let linksHead = new Object();
linksHead.header = "Important Links";

let linksPanelO = new Object();
linksPanelO.route = "/route";
linksPanelO.header = "Important Links";

let linkObj = new Object();
linkObj.route="www.awebsite.com";
linkObj.text="this is a link";

linksPanelO.linkList = [];
linksPanelO.linkList.push(linkObj);
linksPanelO.linkList.push(linkObj);

let headerObj = new Object();
headerObj.header = "Work Flow";

//random data
let one = new Object();
one.route = "DomainAccount";
one.header = "Domain Account";
one.body = "Request Cloud SUDO Access";
let two= new Object();
two.route = "EmailAccount";
two.header = "Email Account"
two.body = "Request UNIX Access. If you need help requestion access, please, click here"
let three= new Object();
three.route = "SponsorException";
three.header = "Sponsor Exception (Role base)";
three.body = "Request user password reset for organizations with extended user count";
let four= new Object();
four.route = "ECMS";
four.header = "ECMS - (Going away)";
four.body = "For Business Continuity. To gain access to Email, information on hard drive, or share folders/home drives of Terminated or Users on Disability. If you need help requesting access, please click here. For obtaining information on Active employees please consult with your HR Business Partner (HRBP)";
let five= new Object();
five.route = "VPN";
five.header = "VPN - ( Email Dave)";
five.body = "Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here";


let list = [];
list.push(one);
list.push(two);
list.push(three);
list.push(four);
list.push(five);

//renders the contractor management screen
export default class ContractorManagementScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
    };
    this.state.navData.list[3].active = "true";
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
            <div id="Contractor_Management_Screen">
              <div className="container">
                {header(linksHead)}
                {linksPanel(linksPanelO)}
                {header(headerObj)}
                {createPanels(list)}
            </div>
          </div>
      </div>
    </div>
    );
  }
}