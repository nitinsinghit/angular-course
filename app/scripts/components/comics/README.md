# Comics Component
Author: Kelly Miller  
User: KellyMiller103

## Description
A view with buttons to navigate between available comic strips that are loaded by the service from a json object with a title, image http url, and author information.

## References & Resources
Controller: `ComicsCtrl` (comics-controller.js)  
Service: `ComicsService` (comics-service.js)  
View: `comics-view.html`  
Module: `comics-module.js`  
Route: `/comics`

## Issues
* I had ng-click on the button span and not on the button itself.
* Forgot to assign controller functions to $scope.

## Other
I could/would have downloaded the files locally and referenced the path url in the json.  
I was going to error check if the images exist and successfully was sourced to the img element.  
Cache comicIndex between state changes.

