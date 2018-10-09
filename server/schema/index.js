const {makeExecutableSchema} = require('apollo-server');
const {importSchema} = require('graphql-import');
const {merge} = require('lodash');
const {join} = require('path')

const queryResolvers = require('./queries');
const typeResolvers = require('./types');
const mutationResolvers = require('./mutations');

const resolvers = merge(queryResolvers, typeResolvers, mutationResolvers);
const typeDefs = importSchema(join(__dirname, './schema.graphql')) 

module.exports = makeExecutableSchema({typeDefs, resolvers})