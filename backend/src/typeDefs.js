const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat]!
    getAll : [Post!]!
  }

  type Cat {
    id: ID!
    name: String!
    color : String
  }

  type Post {
    id: ID!
    title : String!
    description : String
  }

  type Mutation {
    createCat(name: String! , color :String ): Cat! 
    createPost(title : String! , description : String) : Post!
    updatePost(id : ID! , title : String , description : String ) :Post!
    deletePost(id : ID!) : String
  }
`;

module.exports = typeDefs;
