# Wayne E Solutions


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

## CLIENT SIDE

`VITE_APP_BASE_URL = "http://localhost:8081/api/v1"`

`VITE_APP_GOOGLE_CLIENT_ID = "*****************************************"`


## SERVER SIDE

`PORT = 9001`

`MONGODB_URL = "*****"`

`JWT_ACCESS_TOKEN = $2y$12$ioeNXcYkkV0hxYifmhPeqOtoqj1J6RWP/b7IJtdgTYnUn9y8hXUuS`

`JWT_REFRESH_TOKEN = $2y$10$oJEPb4r7y.UF3ctK1B0j.epCSSoACWdZd81odmVqtZH7sHhu/A0Ce`

`GOOGLE_CLIENT_ID = "******************************************"`

## Installation

Install my-project with npm

## CLIENT

```bash
    cd client
    npm i || yarn install
    npm run dev || yarn dev
```

## SERVER

```bash
    cd server
    npm i || yarn install
    tsc
    nodemon ./dist/index.js
```
