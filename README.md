# Use My Tools API

## Documentation

### `GET https://use-my-tool.herokuapp.com/tools`

returns all the tools in the database, response ex:

    { 
        "Name": "Saw",
        "Price": 20,
        "Image": "",
        "Owner": "Travis",
        "Location": "somewhere" 
    }

### `POST https://use-my-tool.herokuapp.com/tools`
Adds a new tool to the database, request body should look like: 

    {
        name: "Saw",
        price: 25,
        ownerId: 2
    }

### `PUT https://use-my-tool.herokuapp.com/tools/update/:id`
Update the tool with that ID in the database. To change the price and name of the tool pass in:

    {
        price: 25,
        name: "Sawzall"
    }

### `GET https://use-my-tool.herokuapp.com/users`
returns all the users in the database, response ex:

    {
        "id": 1,
        "username": "Travis",
        "location": "somewhere"
    },
    {
        "id": 2,
        "username": "Sam",
        "location": "somewhere"
    }

### `GET https://use-my-tool.herokuapp.com/users/:id`
returns that specific user in the database, response ex:

    {
        "user": {
        "id": 1,
        "username": "Travis",
        "location": "somewhere"
    },
    "tools": [
        {
             "id": 1,
             "name": "Saw",
             "toolImg": "",
             "price": 20,
             "ownerId": 1
        },
        {
             "id": 2,
             "name": "Jackhammer",
             "toolImg": "",
             "price": 20,
             "ownerId": 1
        }
      ]
    }

### `PUT https://use-my-tool.herokuapp.com/users/:id`
Updates the user with that ID in the database, to change location send:

    {
        location: "Minnesota"
    }

or to change the username **and** location

    {
        username: "Travis",
        location: "Minneapolis
    }

### `POST https://use-my-tool.herokuapp.com/api/auth/register`
Register a new user in the database, must pass in a **username**, **password**, and a **location**. ex:

    {
        username: "tlaudahl",
        password: "tlaudahl",
        location: "Minnesota"
    }

### `POST https://use-my-tool.herokuapp.com/api/auth/login`

Login and get a token back from the database.

    {
        username: "tlaudahl",
        password: "tlaudahl"
    }
and the response will be:

    {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRsYXVkYWhsMSIsImlhdCI6MTU3NDEyOD",
        username: "tlaudahl",
        status: "Logged In!"
    }
    
    
### `DELETE https://use-my-tool.herokuapp.com/tools/:id`

Delete a specific tool from the database