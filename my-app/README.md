## Running the React WebPack Server

In order to run this application, you will need to setup NodeJS and NPM. This can be done through the node js website found [here](https://nodejs.org/en/download/). 

Generally for setting up React, you will need to use node packet manager(NPM) to install a variety of packages including React, React-Dom, React, Redux, etc. If you are using this repository specificially then all the the packages needed should be contained within the node_modules folder. 

To run the application, you will need to fork the GitHub repo to your own repository if you do not already have access to it and download the repo to your desktop. 

Once on your desktop, open command line and make sure you are using the C drive. If you are, then a C:// should appear when command line is opened. If this is not the case, then type in 'C:' and then press enter to change the drive to the C drive. A C:// should appear in the command line. 

Next, you will need to enter the directory that the React App is stored in. To do this type in the command 'cd Users'. The command line should show C://Users. Then type ' cd your-username', 'cd Documents', 'cd GitHub', 'cd react_app2', and  then 'cd my_app'. 

The file path should look like this: "C://Users/'your-username'/Documents/GitHub/react_app2/my_app". If it does type in the command "npm start" which should run the react application on your local host server from port 3000 and make it accessible on the link "localhost:3000" in any browser. 


##Running the proxy REST API
In order to run the sample REST API in this project, you will be using the json-server package for node.js. The documentation for the server can be found [here](https://github.com/typicode/json-server) . If you forked this repo, then you most likely should already have it in your repository in the node_modules folder. If it is not in your node modules folder, you will need to install it using npm install json-server. 
npm
To run the server, begin by entering the directory of server.js. Instructions for this are detailed above, but instead of using 'cd my_app', you should use 'cd SampleServer'. You should then be in the correct directory. Then type in 'json-server basic.json --port 3004'. The server should then start and be accessible from [localhost:3004](localhost:3004) . 


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