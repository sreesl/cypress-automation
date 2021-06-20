# ✍️ EXERCISE 1 – REST API AUTOMATION

## 🤖 Pre-requisites

To run the tests, please ensure you have the following installed:

[NPM](https://www.npmjs.com/get-npm)

[NodeJS](https://nodejs.org/en/download)


## ✅ How to run

* Clone the repo and install the project dependencies ```npm install```

* To run the tests on your terminal, run ```npm test```

* To run the tests against the Cypress Test Runner, run ```npm cy:open```


## 🧯 Risks/ Issues faced

* The API automation checks required as per the challenge for request types POST, PUT and DELETE makes the tests dependent on each other since we are asserting for the same pet_id in all cases. 
This approach makes the checks brittle since failure of one case (POST) fails the rest (PUT, DELETE) which may be a false positive. We have to keep the tests independent of each other for better.


