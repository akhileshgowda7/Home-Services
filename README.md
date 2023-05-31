# HOME-SERVICES

## DESCRIPTION

```
The Home Services Website is a comprehensive online platform designed to connect customers with a variety of home service providers. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), the website offers a convenient and user-friendly experience for individuals seeking services such as plumbing, gardening, carpentry, and cleaning.
```

## FEATURES

```
Full featured cart
Services reviews and ratings
Top services carousel
service pagination
service search feature
User profile with past services
Admin service management
Admin user management
Admin Order details page
Mark completed services as completed option
Checkout process (Address, payment method, etc)
PayPal / credit card integration
Database seeder (products & users)
```

## Run

```
npm run dev (to start client and sever concurrently)
npm run server (to start client)
npm run client (to start sever)
npm run data:import (to import data from the data folder to mongoDB)
npm run data:destroy (to delete all data from the mongoDb database)

```
## Environment Variable

create a .env folder in the root folder
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies (frontend & backend)

```
npm ci
cd frontend
npm ci
```

