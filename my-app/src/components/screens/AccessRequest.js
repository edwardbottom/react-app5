//imports react libraries and navbar
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, panelception} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

//random data
let textObj = new Object();
textObj.header = "Access Request";
textObj.description = "Tools to manage system and application access.";

let headerObj = new Object();
headerObj.header = "Work Flows";

let largeModalPanel = new Object();
largeModalPanel.route ="#";
largeModalPanel.target="#application-access-v2-modal";
largeModalPanel.header = "Application Access V2 (Large Modal)";
largeModalPanel.body = "Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here";

let pc = new Object();
pc.bodyID = "expandPanel";
pc.expandID = "#"+ pc.bodyID;
pc.header = "Application Access";
pc.content = [];
let e = new Object();
e.route = "GeneralApplicationAccess";
e.header = "General Application Access - (ie. App Access V2)";
e.body = "Domain Password Reset";
pc.content.push(e);


let po = new Object;
po.type = "panelception";
po.bodyID = "expandPanels";
po.expandID = "#"+ po.bodyID;
po.header = "Custom Application Access";
po.content = [];
let bsa = new Object();
bsa.route = "BSAR";
bsa.header = "Billing System Access - BSAR";
bsa.body = "Billing System Access - BSAR";
po.content.push(bsa);
let sap = new Object();
sap.route = "SAP";
sap.header = "SAP System Access";
sap.body = "Billing System Access - BSAR";
po.content.push(sap);
let sav = new Object();
sav.route = "SAV";
sav.header = "Savvis App Access";
po.content.push(sav);
let sfa = new Object();
sfa.type = "panelception";
sfa.bodyID = "expandPanelsa";
sfa.expandID = "#"+ sfa.bodyID;
sfa.header = "Sales Force Access";
sfa.content = [];
let subsfa = new Object();
subsfa.route = "UWS";
subsfa.header = "UWS/EOC Access";
subsfa.body = "UWS/EOC Access";
sfa.content.push(subsfa);
po.content.push(sfa);
let tmp = new Object();
tmp.route = "TouchMobile";
tmp.header = "TouchMobile TMPAM";
tmp.body = "TouchMobile TMPAM";
po.content.push(tmp);
let br = new Object();
br.route = "BrixAccess";
br.header = "Brix Access  - **"
br.body = "Brix Access  - **";
po.content.push(br);
let cpm = new Object();
cpm.route = "CAPM";
cpm.header = "CAPM Role Provision - **";
cpm.body = "CAPM Role Provision - **";
po.content.push(cpm);
let cpt = new Object();
cpt.route = "FT3";
cpt.header = "FT3 access, revoke (Fiber-to-the-Tower) FTTT";
cpt.body = "FT3 access, revoke (Fiber-to-the-Tower) FTTT";
po.content.push(cpt);
let kgp = new Object();
kgp.route = "KGP";
kgp.header = "KGP Access";
po.content.push(kgp);
let nfms = new Object();
nfms.route = "NFMS";
nfms.header = "NFMS/UNET -  ** ";
po.content.push(nfms);
pc.content.push(po);

let cit = new Object();
cit.type = "panelception";
cit.bodyID = "expandPanelsaz";
cit.expandID = "#"+ cit.bodyID;
cit.header = "CITRIX Access";
cit.content = [];
let agg = new Object();
agg.route = "AGG";
agg.header = "Application Global Group(s) & CITRIX ICON";
agg.body = "Application Global Group(s) & CITRIX ICON";
cit.content.push(agg);
//pc.content.push(cit);

console.log(JSON.stringify(po));

let sa = new Object();
sa.type = "panelception";
sa.bodyID = "expandPanelsazq";
sa.expandID = "#"+ sa.bodyID;
sa.header = "Servers Access";
sa.content = [];
let mainframe = new Object();
mainframe.route = "mainframe";
mainframe.header = "Mainframe - RACF";
sa.content.push(mainframe);
let mid = new Object();
mid.type = "panelception";
mid.bodyID = "expandPanelsazqw";
mid.expandID = "#"+ mid.bodyID;
mid.header = "Midrange - Unix/Linux";
mid.content = [];
let sud = new Object();
sud.route = "CloudSUDOAccess";
sud.header = "Cloud SUDO Access";
mid.content.push(sud);
sa.content.push(mid);
let midrange = new Object();
midrange.route = "midrange";
midrange.header = "Midrange - Windows";
sa.content.push(midrange);
//po.content.push(sa);

let itt = new Object();
itt.type = "panelception";
itt.bodyID = "expandPanelsazqa";
itt.expandID = "#"+ itt.bodyID;
itt.header = "IT Tools System Access";
itt.content = [];
let sp = new Object();
sp.route = "Splunk";
sp.header = "Splunk";
itt.content.push(sp);
let jen = new Object();
jen.route = "jenkins";
jen.header = "Jenkins";
jen.body = "Jenkins";
itt.content.push(jen);
let dim = new Object();
dim.route = "dimension";
dim.header = "Dimension";
dim.body = "Dimension";
itt.content.push(dim);
let pann = new Object();
pann.route = "DispatchSystemSupportAccess";
pann.header = "Dispatch System Support Access";
pann.body = "Dispatch System Support Access";

let sra = new Object();
sra.type = "panelception";
sra.bodyID = "expandPanelsazqw";
sra.expandID = "#"+ sra.bodyID;
sra.header = "Shared Resource Access";
sra.content = [];
let lp = new Object();
lp.route = "localprinters";
lp.header = "Local Printers";
lp.body = "Local Printers";


let fs = new Object();
fs.type = "panelception";
fs.bodyID = "expandPanelsazqwq";
fs.expandID = "#"+ fs.bodyID;
fs.header = "File Share";
fs.content = [];
let wgg = new Object();
wgg.header = "Windows Global Group - Shared FileServer";
wgg.route = "WindowsGlobalGroup";
fs.content.push(wgg);
let nfs = new Object();
nfs.header = "Network File Share - Roaming & Personal FileServer (i.e H drive) *****";
nfs.route = "NFS";
fs.content.push(nfs);

let ba = new Object();
ba.type = "panelception";
ba.bodyID = "expandPanelsazqwqq";
ba.expandID = "#"+ ba.bodyID;
ba.header = "Building Access";
ba.content = [];
let brq = new Object();
brq.header = "Badge Request";
brq.body = "Badge Requests";
brq.route = "BuildingAccess";
ba.content.push(brq);

//renders the access request screen
export default class AccessRequestScreen extends React.Component {

  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
      //url:this.props.url
      //url:"http://localhost:3004/content"
    };
    this.state.navData.list[1].active = "true";
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
          {/*hard code*/}
            <div className="panel panel-success">
              {/*modal panel*/}
              <div className="panel-heading">
                <a href='/workflow' data-toggle="modal" >
                  <strong>Application Access V2 (Work Flow Page)</strong>
                </a>
                <a href="#myModal" data-toggle="modal" data-target="#myModal">
                  <span class="glyphicon glyphicon-question-sign"></span>
                </a>
              </div>
                <div id="myModal" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <p>"Request access to Applications within the following environments: Regular, 
                        Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access,
                         please click here";</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-success">
                <div className="panel-heading">
                  <Link to="/complexscreen" /*params=somethingToSignifyTheRequest*/>
                    <strong>Application Access V2 (dynamic Page)</strong>
                  </Link>
                </div>
              </div>
              {panel(largeModalPanel)}
              {panelception(pc)}
              {panelception(cit)}
              {panelception(sa)}
              {panelception(itt)}
              {panel(pann)}
              {panelception(fs)}
              {panelception(ba)}
            </div> 
          </div>
    );
  }
}


