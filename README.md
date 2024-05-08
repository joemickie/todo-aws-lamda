# Todo GraphQL API with AWS Lambda
This project implements a GraphQL API for a todo list application using AWS Lambda, MongoDB, and Node.js. It provides functionality for managing todo items through GraphQL queries and mutations.

# Table of Contents
Project Structure
Dependencies
Installation
Configuration
Usage
Testing
Deployment
Contributing
License

# Project Structure
```
project-root/
│
├── src/
│   ├── models/
│   │   ├── Todo.js
│   ├── graphql/
│   │   ├── schema.js
│   │   └── resolvers.js
│   |── utils/
│   |   ├── logger.js
│   |-- routes
|       |-- todoRoutes.js
|
├── test/
│   └── unit
|       |-- resolver.test.js
│
├── server.js
├── serverless.yml
└── .env
```

# Dependencies
aws-sdk: Official AWS SDK for JavaScript.
graphql: Implementation of the GraphQL specification for JavaScript.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
apollo-server-lambda: Implementation of Apollo Server specifically for AWS Lambda.

# Installation
1.Clone the repository:
```
git clone https://github.com/your-username/todo-graphql-api.git
```

2.Install dependencies:
```
cd todo-graphql-api
npm install
```

# Configuration
1.Create a .env file in the project root and add your MongoDB connection URI:
```
MONGODB_URI=mongodb://localhost:27017/todo
```
2.Set up AWS credentials with sufficient permissions for deploying Lambda functions. You can configure them using the AWS CLI or environment variables.

# Usage
1.Start the development server:

```
npm start
```
2.Access the GraphQL playground in your browser at http://localhost:3000/graphql to interact with the API.

# Testing
Run unit tests using the following command:
```
npm test
```

# Deployment
Deploy the GraphQL API using AWS Lambda and API Gateway by running:
```
npm run deploy
```

# Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

# License
This project is licensed under the MIT License - see the LICENSE file for details.