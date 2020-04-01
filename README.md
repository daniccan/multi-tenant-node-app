# multi-tenant-node-app

## APIs

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
