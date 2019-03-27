Test App
------------

This app is to handle user. It provides three endpoints:
1. Get User By Id
2. Update User By Id
3. Get All Users (Additional Endpoint written)

---------------------------------------------------------

Get User EndPoint

	Method: GET
	EndPoint: http://localhost:8080/api/users/<userId>
	Header: {
		"Content-Type":"application/json"
	}


---------------------------------------------------------

Update User EndPoint:

	Method: POST
	EndPoint: http://localhost:8080/api/users/<userId>
	Header: {
		"Content-Type":"application/json"
	}

	body: {
    "email": "test@email.com",
    "first_name": "John",
    "last_name": "Doe"
  }


---------------------------------------------------------

Get Users List EndPoint

	Method: GET
	EndPoint: http://localhost:8080/api/users
	Header: {
		"Content-Type":"application/json"
	}


---------------------------------------------------------

  Note :
    Assuming Node and Postgres is installed, following steps need to be followed to migrate database and seeding:

    1. npm install
    2. ./node_modules/.bin/knex migrate:latest
    3. ./node_modules/.bin/knex seed:run
