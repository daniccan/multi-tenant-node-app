# multi-tenant-node-app

## What is this?

This is a proof-of-concept (POC), multi-tenant [RESTful Web Services](https://restfulapi.net/) application built on top of [NodeJS](https://nodejs.org/en/).

## Get Started

* Install dependencies.
```
npm install
```
* Verify the Database configuration in `config/config.json`.
* Create DB using Sequelize.
```
npx sequelize-cli db:create
```
* Run migrations on the main database.
```
npx sequelize-cli db:migrate
```
* Start the application.
```
npm start
```
* Perform API requests.

## APIs

### HTTP Headers

* For APIs other than `Signup` and `Authentication`, pass the `JWT Token` in the `Authorization` header of the request.

```
Authorization: Bearer <JWT Token>
```

* For APIs other than `Signup`, pass the `Tenant ID` in the `X-TENANT-ID` custom header of the request.

```
X-TENANT-ID: <Tenant ID>
```

### Signup

* POST `/api/v1/accounts/signup`

```
{
  "name": "Alphabet",
  "domain": "alphabet.com",
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@alphabet.com",
  "password": "5f4dcc3b5aa765d61d8327deb882cf99"
}
```

### Authentication

* POST `/api/v1/auth/login`

```
{
  "email": "johndoe@google.com",
  "password": "5f4dcc3b5aa765d61d8327deb882cf99"
}
```

### Organizations

* GET `/api/v1/organizations`

* GET `/api/v1/organizations/:organizationId`

* POST `/api/v1/organizations`

```
{
  "name": "Google",
  "domain": "google.com"
}
```

* DELETE `/api/v1/organizations/:organizationId`

### Users

* GET `/api/v1/users`

* GET `/api/v1/users/:userId`

* POST `/api/v1/users`

```
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@google.com",
  "password": "5f4dcc3b5aa765d61d8327deb882cf99"
}
```

* DELETE `/api/v1/users/:userId`

## Libraries

* Core - [Express](https://www.npmjs.com/package/express) + [Body Parser](https://www.npmjs.com/package/body-parser)
* ORM - [Sequelize](https://www.npmjs.com/package/sequelize) + [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli)
* Databases - [MySQL2](https://www.npmjs.com/package/mysql2) + [SQLite3](https://www.npmjs.com/package/sqlite3)
* Logger - [Winston](https://www.npmjs.com/package/winston) + [Morgan](https://www.npmjs.com/package/morgan)
* Monitoring - [Nodemon](https://www.npmjs.com/package/nodemon)
* Authentication - [Passport](https://www.npmjs.com/package/passport) + [JWT](https://www.npmjs.com/package/passport-jwt)
