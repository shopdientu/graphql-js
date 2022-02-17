const express = require('express')
const app = express()
const resolvers = require('./resolvers/resolvers')
const typeDefs = require('./schema/schema')
const startApolloServer = require('./apollo/connect')
const connectMongo = require('./mongo/connect')



const port = 4000

// Server Apollo


app.listen(port, async () => {

  const uri = "mongodb+srv://shopdientu:1234@nodeexpressproject.oqmog.mongodb.net/graphql-javascript?retryWrites=true&w=majority";
  await connectMongo({ uri })
  console.log(`server start on port ${port}`)
  await startApolloServer({ resolvers, typeDefs, app })
})
