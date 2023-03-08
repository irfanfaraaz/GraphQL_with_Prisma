const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./src/typedefs.js')
const { resolvers } = require('./src/resolvers.js')


const port = process.env.PORT || 4000

new ApolloServer({ resolvers, typeDefs,introspection: true }).listen({ port }, () =>
  console.log(`Server ready at: http://localhost:${port}`),
)