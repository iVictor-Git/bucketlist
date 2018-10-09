require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const models = require('./models');

// The GraphQL schema
const schema = require('./schema');


// DATABASE
mongoose
  .connect(
    process.env.DB_URI,
    { useNewUrlParser: true },
  )
  .catch(console.warn); // connect to db
const database = mongoose.connection; // this represents the database

// SERVER/API
const server = new ApolloServer({
  schema,
  context: {
    models
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
