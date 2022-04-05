const express = require('express')
// ! error const expressGraphQL = require('express-graphql') , use this below
const { graphqlHTTP } = require('express-graphql');
const { 
    GraphQLSchema, 
    GraphQLObjectType,
    GraphQLString, 
} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'Hello World' 
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(5000, () => console.log('Server Runing'))