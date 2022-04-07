// const { GraphQLServer } = require('graphql-yoga');
// ! err -> ⬇ use this below ⬇
const { createServer } = require('graphql-yoga');
const { v4: uuidv4 } = require('uuid')

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
    },
    {
        id: '3',
        name: '3',
        age: '3',
        location: {
            state: 'Bangkok3',
            city: '3'
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

            # mutations
            type Mutation {
                addUser(name: String!, age: Int!): [User!]!
                updateUser(id: ID!, name: String, age: Int): User!
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
            // o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o
            Mutation: {
                addUser: (parent, args, ctx, info) => {
                    const { name, age } = args;

                    users.push({
                        id: uuidv4(),
                        name,
                        age
                    })

                    return users 
                },
                updateUser: (parent, args, ctx, info) => {
                    const { id, name, age } = args;
                    const user = users.find((user) => user.id === id);

                    if (!user) {;
                    }
                    if (name) {
                        user.name = name;
                    }
                    if (age) {
                        user.age = age;
                    }

                    return user
                }
            }
        },
    },
  })
  // start the server and explore http://localhost:4000/graphql
  server.start()