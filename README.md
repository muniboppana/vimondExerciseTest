#vimondExerciseTest

The main purpose of the project to invoke get and post services by using node js and return data based on the input given by user.

#Dev env Setup 

install node js package.
install Webstorm IDE or Visual studio.
clone the project from GitHub. Below is the url.
https://github.com/muniboppana/vimondExerciseTest
once imported the project into IDE and open the Terminal.

#Build and Execution on Terminal

Enter  "npm install" 
Enter  "npm start"
Open the browser and then hit below url's.

1) http://localhost:8040/ping
2) http://localhost:8040/version
3) http://localhost:8040/images
4) http://localhost:8040/images?size=n   n is the integer number 1,2,3....
5) http://localhost:8040/images?size=n&&offset=a   n&a, are the integer number 1,2,3....
6) http://localhost:8040/Nicholas
7) http://localhost:8040/Romaguera
8) This is post implementation, so run this url in postman with below body.
   http://localhost:8040/todo  

   { "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
   }
   
9) http://localhost:8040/sorted-users
10) implemented the cache feature with 10 seconds for all methods.
11) implemented the Jest cases for two methods.
 


#Verify Negative scenarios

12) http://localhost:8040/images?size=n ,  Display the error message in UI if provide the other than numeric. example like 1x,abc....
13) http://localhost:8040/images?size=n&&offset=a,  Display the error message in UI if provide the other than numeric. example like 1x,abc....

