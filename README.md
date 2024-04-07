# TeleShows-Frontend
This is an TeleShow Application.

The Goal of this application is to display the list of shows.
It has the feature of edit, delete, search, sort and filter.
Based on the values provided by the user, the application displays the list.

Validations:

	 A form with 5 input validations.
   	* The Name and Description must be an string.
    * The Duration must be a numeric value.
    * The Rating should not be empty.
    * The Genre must be selected.
    * The Add will be disabled until the form validations are met. 	

 # To run the application locally from an IDE
   	1.CLone the repository
    2.Open terminal
    3.npm install
    4.ng serve
    5.Open the application at http://localhost:4200
    
 # To run via Docker
    1.docker pull samyukthakirankumar/practice:teleservice-frontend
    2.docker pull samyukthakirankumar/practice:teleservice-backend
    3.docker run -d -p 9229:9229 --name=teleservice-backend samyukthakirankumar/practice:teleservice-backend
    4.docker run -d -p 8080:80 --name=teleservice-frontend samyukthakirankumar/practice:teleservice-frontend
    5.Open the application at http://localhost:8080
  
