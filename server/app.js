require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const models = require('./models');

const getScope = (req) => {
  console.log(req);
}

// The GraphQL schema
const schema = require('./schema');

// DATABASE
mongoose
  .connect(
    process.env.DB_URI,
    { useNewUrlParser: true },
  )
  .catch(console.warn); // connect to db
const database = mongoose.connection; // this represents the database even though we don't use it

// SERVER/API
const server = new ApolloServer({
  schema,
  context: ({req}) => ({
    authScope: getScope(req.headers), // make a function called getScope
    models
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
