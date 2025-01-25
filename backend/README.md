# **NodeJS NYX Chiper Backend App**

## **Technologies Used**
1.  NodeJS
2.  Express
3.  MongoDB
4.  Mongoose
5.  PassportJS
6.  JWT
7.  Nodemailer

## **Prerequisites**
- Git
- Bitbucket
- NodeJS
- CLI


## **Prerequisites**
This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
v 10.5.0
v 20.10.0
```

## **Getting Started**
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://@bitbucket.org/repository.git
$ cd backend
```

To install and set up the library, run:

```sh
$ node --version
$ npm install
```
## **Usage**
### Serving the app
```sh
$ npm start
```
### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

## **What's New:**
Added the currency exchange route, controller and service as below:
**Route Layer:**
    Defined in routes/currencyExchange.js, which maps the /convert endpoint to the controller.
**Controller Layer:**
    currencyExchangeController.js in the controllers folder handles the incoming request, validates parameters, and calls the service.
**Service Layer**
    currencyExchangeServices.js in the services folder fetches the live exchange rate from the external API using axios and calculates the converted amount.        

## **NOTE**
1. We Should move all the config/private keys to the .env or aws secrets for the security purpose.
2. Used the **https://freecurrencyapi.com/** as a third party platform to get realtime currency exchange rate.