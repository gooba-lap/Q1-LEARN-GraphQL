const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query {
        name: String!
        age: Int!
        isSingle: Boolean
    }
`

const resolvers = {
    Query: {
        name() {
            return 'asd';
        },
        age() {
            return 22;
        },
        isSingle() {
            return null
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

const options = {
    port: 4000,
    endpoint: '/graphql'
}

server.start(options, ({ port }) => 
    console.log(`server on port ${port}.`)
)