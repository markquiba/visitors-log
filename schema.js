const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const VisitorType = new GraphQLObjectType({
  name: 'Visitor',
  fields: () => ({
    id: { type: GraphQLInt },
    device: { type: GraphQLString },
    ip_address: { type: GraphQLString },
    date_time: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    visitors: {
      type: new GraphQLList(VisitorType),
      resolve(parent, args) {
        return axios.get('http://localhost:3001/visitors')
          .then(res => res.data);
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});