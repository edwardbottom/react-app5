//imports react libraries and navbar
import React, { Component } from 'react';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels, centerPanelWithRows, centerPanelWithTable, collapsePanel, panelception} from './objects/panel';
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

//creates a screen using an array of component objects
export function createScreen(props){
  if(props.length > 0){
        return(
          <div>
            {props.map(inputObj => {
              if(inputObj.type === "header"){
                  return (
                    <div>
                      {header(inputObj)}
                      <br/>
                    </div>
                )
                }
                else if(inputObj.type == "headerAndDescription"){
                  return (
                    <div>
                      {headerAndDescription(inputObj)}
                    </div>
                  ) 
                }
                else if(inputObj.type == "linksPanel"){
                  return(
                    <div>
                      {linksPanel(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.type =="createPanels"){
                  return(
                    <div>
                      {createPanels(inputObj.list)}
                    </div>
                  )
                }
                else if(inputObj.type == "panelception"){
                  return(
                    <div>
                      {panelception(inputObj)}
                    </div>
                  )
                }
              return null
            })}
         </div>
        )
      }
  else{
    return (
      <p> Not a valid props </p>
    )
  }     
}