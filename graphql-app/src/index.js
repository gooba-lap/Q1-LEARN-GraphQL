// const { GraphQLServer } = require('graphql-yoga');
// ! err -> ⬇ use this below ⬇
const { createServer } = require('graphql-yoga');

const users = [
    {
        id: '1',
        name: 'john',
        age: '25',
        location: {
            state: 'Bangkok',
            city: '111'
        }
    },
    {
        id: '2',
        name: '2',
        age: '2',
        location: {
            state: 'Bangkok2',
            city: '2'
        }
    }
]

// Create your server
const server = createServer({
    schema: {
        typeDefs: /* GraphQL */ `
            type Query {
                name: String!
                age: Int!
                isSingle: Boolean
                number: [Int!]!
                location: Location

                users: [User!]!
            }
            type User {
                id: ID!
                name: String!
                age: Int!
                location: Location!
            }
            type Location {
                state: String!
                city: String!
            }
        `,
        // o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o
        resolvers: {
            Query: {
                name: () => 'sisi',
                age: () => 22,
                isSingle: () => null,
                number: () => [10, 20, 30, 40 ,50],
                location: () => ({
                    state: () => 'Bangkok',
                    city: () => 'Ladkrabung'
                }),
                users: () => users
            },
        },
    },
  })
  // start the server and explore http://localhost:4000/graphql
  server.start()