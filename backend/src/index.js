const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  await server.start();
  server.applyMiddleware({ app });

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://ashar1:ashar1@cluster0.ybb8j.mongodb.net/Crud_GraphQL?retryWrites=true&w=majority"
    , async(err)=>{
        if(err) throw err;
        console.log("conncted to database : Crud_GraphQL")
    }
)

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();