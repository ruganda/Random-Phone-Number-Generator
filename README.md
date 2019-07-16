# Random-Phone-Number-Generator
The length of a phone number has to be 10 digits (all starting with zero) and should always be unique. 

[![Build Status](https://travis-ci.org/ruganda/Random-Phone-Number-Generator.svg?branch=master&service=github)](https://travis-ci.org/ruganda/Random-Phone-Number-Generator)
[![Coverage Status](https://coveralls.io/repos/github/ruganda/Random-Phone-Number-Generator/badge.svg?branch=master&service=github)](https://coveralls.io/github/ruganda/Random-Phone-Number-Generator?branch=master)

**Application Features**

Random Number Generator:

- Generates random phone numbers depending on the selected in put.
![alt text](https://raw.githubusercontent.com/ruganda/Random-Phone-Number-Generator/master/photos/post.png)

- Get all sorted phone numbers and , minimum, max and the total of all numbers.
![alt text](https://raw.githubusercontent.com/ruganda/Random-Phone-Number-Generator/master/photos/get.png)


**Application demo**

* To interact with the application via postman
     * https://ruganda-phone-number-generator.herokuapp.com/

    then use the following endpoints to perform the specified tasks
    
    EndPoint                                           | Functionality
    ------------------------                           | ----------------------
    POST /                                         | Generates  random phone Numbers 
    GET /                                          | Gets all generated numbers, max, min and the total.
    

    
**Getting started with the app**

**Technologies used to build the application**

* Node js 

* Express


* Mocha 

# Installation

- clone the repository
- install the packages by running `npm install`
- start the project with `npm start`


# Testing
 - run `npm test` to run the tests