# EXERCISE 2 – WEB FE AUTOMATION

## Pre-requisites

To run the tests, please ensure you have the following installed:

[NPM](https://www.npmjs.com/get-npm)

[NodeJS](https://nodejs.org/en/download)


## How to run

* Clone the repo and install the project dependencies ```npm install```

* To run the tests on your terminal, run ```npm test```

* To run the tests against the Cypress Test Runner, run ```npm cy:open```

* Test results (screenshots and videos) are available in the folder cypress/artifacts


## Risks/ Issues faced

* Testability of the application is poor and hence affecting the stability of tests.  

* Since its a single page application with no distinction in the page to differentiate between categories other than product list, the scenario 
 ```Navigation through categories``` is unstable for example #2 and #3. This could have been avoided with a presence of distinct element differentiating the categories page with the general product page and the usage of ```waitUntil()```.

* Complexity in implementing certain checks is higher. Could have been avoided with unique identifiers. ```Example, the Amount and ID in the success purchase message was a single string instead of being multiple elements with unique ids.```

 



