// require('dotenv').config();
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const mongoose = require('mongoose');
// const typeDefs = require('./src/graphql/schema');
// const resolvers = require('./src/graphql/resolvers');
// const { authorizeUser } = require('./src/utils/auth');
// const logger = require('./src/utils/logger');
// const { putMetricData } = require('./src/utils/monitoring');
// const todoRoutes = require('./src/routes/todoRoutes');

// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     const user = req.user || null;
//     return { user };
//   },
//   introspection: true,
//   playground: true,
// });

// async function startServer() {
//   await server.start(); // Start Apollo Server before applying middleware

//   server.applyMiddleware({
//     app,
//     path: '/',
//   });

//   // Register middleware
// app.use(express.json());

//   // Apply the todoRoutes with authorizeUser middleware
//   app.use('/api', authorizeUser(['user', 'admin']), todoRoutes);

//   app.use((err, req, res, next) => {
//     logger.error(err.stack);
//     res.status(500).send('Something went wrong!');
//   });

//   const PORT = process.env.PORT || 3000;

//   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       app.listen(PORT, () => {
//         logger.info(`Server running at http://localhost:${PORT}`);
//         putMetricData('ServerStart', 1);
//       });
//     })
//     .catch(err => {
//       logger.error('MongoDB connection error:', err);
//       putMetricData('MongoDBError', 1);
//     });
// }


require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   introspection: true,
//   playground: true,
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    
    return {};
  },
  introspection: true,
  playground: true,
});

async function startServer() {
  await server.start();

  server.applyMiddleware({
    app,
    path: '/',
  });

  app.use(express.json());

  app.use('/api', todoRoutes);

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  const PORT = process.env.PORT || 3000;

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
    });
}

startServer(); // Call the function to start the server
