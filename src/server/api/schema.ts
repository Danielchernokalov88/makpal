import { makeExecutableSchema } from 'graphql-tools';

import rootSchemaDef from './rootSchema.js';
import modules from '../modules/index.ts'; 
import pubsub from './pubsub.ts';

// console.log(modules.schemas)
// import gql from 'graphql-tag';

// var schema = gql`
// extend type Mutation {
//   # Logout user
//   logout: String
// }
// ` 

// [rootSchemaDef].concat(modules.schemas)
const executableSchema = makeExecutableSchema({ 
  typeDefs: rootSchemaDef,
  resolvers: modules.createResolvers(pubsub)
});

export default executableSchema; 
