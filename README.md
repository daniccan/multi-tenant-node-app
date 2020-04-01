# multi-tenant-node-app

## APIs

**Note:** For APIs other than `/auth/login`, pass the `JWT Token` as `Authorization` header.

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiZW1haWwiOiJqb2huZG9lQGdpdGh1Yi5jb20iLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIwLTA0LTAxVDExOjMzOjQ5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA0LTAxVDExOjMzOjQ5LjAwMFoiLCJPcmdhbml6YXRpb25JZCI6bnVsbCwiaWF0IjoxNTg1NzUxMDMwfQ.pFM0DspqwJX87jqYF846Dn-k6XSB_EIjUImT6n1tjcI 
```

### Authentication

* POST `/auth/login`

```
{
  "email": "johndoe@github.com",
  "password": "5f4dcc3b5aa765d61d8327deb882cf99"
}
```

### Organizations

* GET `/api/v1/organizations`

* GET `/api/v1/organizations/:organizationId`

* POST `/api/v1/organizations`

```
{
  "name": "GitHub",
  "domain": "github.com"
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
  "email": "johndoe@github.com",
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
