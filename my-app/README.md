## Running the React WebPack Server
In order to run this application, you will need to setup NodeJS and NPM. This can be done through the node js website found [here](https://nodejs.org/en/download/). 

Generally for setting up React, you will need to use node packet manager(NPM) to install a variety of packages including React, React-Dom, React, Redux, etc. If you are using this repository specificially then all the the packages needed should be contained within the node_modules folder. 

To run the application, you will need to clone the GitHub repo to your own repository if you do not already have access to it and download the repo to your desktop. 

Once on your desktop, open command line and make sure you are using the C drive. If you are, then a C:// should appear when command line is opened. If this is not the case, then type in 'C:' and then press enter to change the drive to the C drive. A C:// should appear in the command line. 

Next, you will need to enter the directory that the React App is stored in. To do this type in the command 'cd Users'. The command line should show C://Users. Then type ' cd your-username', 'cd Documents', 'cd GitHub', 'cd react_app2', and  then 'cd my_app'. 

The file path should look like this: "C://Users/'your-username'/Documents/GitHub/react_app2/my_app". If it does, type in the command "npm install". This command will update the project so that it has all the neccisary dependencies to properly run the react app. Then run "npm start" which should run the react application on your local host server from port 3000 and make it accessible on the link "localhost:3000" in any browser. 



##Running the proxy REST API
In order to run the sample REST API in this project, you will be using the json-server package for node.js. The documentation for the server can be found [here](https://github.com/typicode/json-server) . If you forked this repo, then you most likely should already have it in your repository in the node_modules folder. If it is not in your node modules folder, you will need to install it using npm install json-server. 

To run the server, begin by entering the directory of server.js. Instructions for this are detailed above, but instead of using 'cd my_app', you should use 'cd SampleServer'. You should then be in the correct directory. Then type in 'json-server basic.json --port 3004'. The server should then start and be accessible from [localhost:3004](localhost:3004) . 



##Learning React
React has many great resources online and excellent help and support on StackOverFlow and GitHub. There is also a Discord channel, reactiflux.com , that features many veteran React developers that are always eager to answer questions and solve obscure problems. This cite can be reached [here](https://www.reactiflux.com/) . 

However, for learning React, I strongly reccommend reading the offical documentation put out by Facebook that can be found [here](https://reactjs.org/docs/hello-world.html) . This website begins with setup and installation and covers everything from the basics to advanced architecure design in React. It gives thorough documentation and in browser, interactive examples. 



##Setting up React in Sublime Text 3
React uses its own version of Javascript called JSX. Unfortanetly, most text editors do not have a default setting for JSX, so if you wish to effectively develop in JSX, you will need to install a new plugin that supports Babel (the react compiler) and JSX. 

This can be done in Sublime Text 3 by pressing ctrl + shift + p and then typing in "install" and selecting the first option "Package control: Install Package". Then type in "Babel" and select the first option "Babel-Snippets". This should install the babel plugin for Sublime Text 3.

To access the newly downloaded plugin, select the Babel Syntax from "View > Syntax > Babel > Javascript". This should setup Sublime so that the editor's layout and color scheme will be compatible with React's JSX syntax. 



##Setting up React in Visual Studio
To setup React syntax in Visual Studio, begin by opening the Options dialog and then under "Editing > Javascript > Inspections", choose ECMAScript 6 in the Javascript language dropdown. Make sure the "Enable JSX syntax" in the .JS files option is selected as well. 

You will then need to disable the javascript syntax errors in Visual Studio by going to "Tools > Options > Text Editor > JavaScript > IntelliSense " and unchecking the show syntax errors box. Then reload Visual Studio to enable the changes. 



##Developer Tools
For software development in general, but especially React, I highly reccomend using the Chrome browser as it offers the best developer tools for web development and has a variety of plugins that will make debugging, running, and editing much eaiser. I reccomend installing the Chrome React developer plugin that can be found [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) . 

This plugin will allow you to view the properties and states of React components while running the webpack server in browser. It will save you many headaches during debugging while trying to track the flow of data, properties, and state. 


## Making CORS http requests using Axios and React

### Get Request
The requests in this project use the Axios library to make requests to a REST API. Below is an example of how to perform a CORS GET request using axios. 

import axios from 'axios';

  componentDidMount() {
	axios.get("http://10.125.2.131/cdmt/dataService/WSSConfig")
		.then(res => {
        	const returnedData = res.data;
        	console.log(returnedData)
      		})

    	.catch((err) => {
      		console.log("AXIOS ERROR: ", err);
      		})

This type of request uses javascript, not JSX and most often should be done in the componentDidMount or the componentWillMount part of the React Class lifecycle. You will want to make sure you have axios installed before making any requests; if you do not have it installed, simply run the command 'npm install axios' in the my-app file to install it. Once installed, make sure you import it at the top of your code (NOT in the componentDidMount/componentWillMount section of the lifecycle, rather at the very start of the code after you have imported React). 

To make a get request, you will want to call on the instance of axios you created and then a get request and specify the url/server the get request is performed on. This will look like this 'axios.get("http://10.125.2.131/cdmt/dataService/WSSConfig")'. Axios uses promise objects, so the code will need a means to both use the promise if it returns successfully, '.then', and should also catch any errors, '.catch'. The .then should take in a response object, in this case it is called res, which it is then able to parse. The response to the get request should be accessible as the data instance varaible of the response object (res.data). The full success case is shown below. 

.then(res => {
        const budgetrequests = res.data;
        console.log(budgetrequests)
      })

In the event that an error is thrown, the user should (but does not have to) catch the error. The catch object should take in an unsuccessful promise object or error and print the error to the console so the developers can see the error. The call should look like this. 

.catch((err) => {
    console.log("AXIOS ERROR: ", err);
     }) 


### POST Request
Making a POST request requires a similar structure to a GET request, but requires a header with a content type to ensure the post request is properly processed by the server. The full request is shown below. 

	var parameter = "panel.json";

     axios.post("http://10.125.2.131/cdmt/dataService/WSSConfig", string, {
        //add this header to the server
        headers: {
            'Content-Type' : 'text/plain; charset=UTF-8',
            'authorization' : 'hello world'
        }
      })
      .then(res => {
        const responseObject = res.data;
        console.log(responseObject)
      })
      .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      })
   }

The intial setup and placement of the code is the same as the GET request, but the request uses the axios post request instead of the get request. It also can take in paramters for the method to post. This is done inside the post call, after the url/server is specified. In this case, the value being posted is the variable declared preiously, parameter. 

The post request then needs to have headers with a content type that matches the post request of the server. In the case shown above, this is done as 'plain/text; charset=UTF-8', specifying that the request is sending a string of plain text using the charset UTF-8. Without this header, the call will fail. 

The additional header underneath the content type is an optional header for security purposes. It functions as an access token for the client that is sent to the server to validate the client's request. The .then and .catch for the promise object from the POST request function the same as the requests from the GET request. 



##Working with JSON objects in React
Using the JSON objects and JSON arrays from these requests is the same as using an object or array in Javascript. For example, if you had an object, a with the values b and c, the values of the JSON object could be accessed like this: 

a.b //accessing value b of a
a.c //accessing value c of a

Getting an object from a JSON array is not any different than getting an object from an array in Javascript, simply scope into the index desired to access the object or value at the index. 

a[0] //accessing the object/value in the 0 index of the array a
a[2].val //accessing val value of the object in the 2 index of the array a



##code to generate a basic screen
The code below takes in an array of JSON objects that could be accessed from a server or database and uses them to render pages that contain mostly panels and text. The rendering is based off the ordering of the objects in the array; the objects at the begining of the array are rendered first. It operates around a series of conditionals and can be easily modified to render additional objects by adding additional else if cases. 


//creates a screen using an array of component objects
 function createScreen(props){
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




##Using React with Java Serverlet
React can be deloyed as a servlet in Java. To do this, you will need a production build of the project, which can be gotten by running the command "npm run build". Maven can then be used through the command line to bundle the package. This process is described in details in [this link](https://www.megadix.it/blog/create-react-app-servlet/) . There is also a text file in the react-app5 folder that has a list of resources on using React and Java with a variety of servers, configurations, and file types. 



 ##Creating a React Application
 If you want to create another react application, the easiest, and most common way is to use create-react-app. This will take care of setting up all of the default packages and configurations used by React. To do this, first make sure you have node/npm installed globally on your machine. If you dont have it, you can download it [here](https://nodejs.org/en/) . Once you have node, run the command "npm install -g create-react-app". This will install create-react-app command globally, allowing you to use it to create react applications using a simple command. 

 To use create-react-app, you will first want to make sure you are in the directory or folder you want the React app to be saved in. Once you are in the directory you want the react app saved in, run the command "create-react-app <name of app>" (the <name of app> should be the name of your react app, for example if you were going to name your app my-app, the command would be "create-react-app my-app"). 

  This command may take a while, because React requires alot of dependencies, but once the command finishes, simply enter the folder the command created and run the command "npm start", to start the new React app in development mode. 