const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { mongoDataMethods } = require('../data/db')


module.exports = async ({ typeDefs, resolvers, app }) => {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: () => {
      // console.log(req)
      return { mongoDataMethods }
    }
  })
  await serverApollo.start()
  serverApollo.applyMiddleware({ app })
  console.log(`Connect graphql http://localhost:4000${serverApollo.graphqlPath}`)
}