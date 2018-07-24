//imports react libraries and class imports
import React, { Component } from 'react';

//renders a static login screen
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {/*css to center the panel for the login form*/}
        <style>{"\
        .panel{\
          position: absolute;\
          top: 5%;\
          transform: translateY(50%);\
        }\
      "}\
      <br/>
      <br/>
      </style>
      <br/>
      <br/>
      <div className="container">
      {/*login form and panel*/}
      <center>
          <div className="panel panel-success">
              <div className="panel-body">
                <center>
                  <form action="/I_hate_php.php">
                    <div className="form-group">
                      <label for="username">Username:</label>
                      <input type="username" class="form-control" id="username" placeholder="CenturyLink Common User ID"></input>
                    </div>
                    <div className="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="CUID password"></input>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox"></input> Remember me</label>
                    </div>
                    <a href="/home" className="btn btn-success" role="button">Login</a><br/><br/>
                    <a href="http://somelink.com">Send Email</a>
                  </form>
                </center>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}


