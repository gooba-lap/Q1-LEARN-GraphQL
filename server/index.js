const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./schema/resolvers");
const { typeDefs } = require("./schema/type-defs");

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: (req) => {
        return { req };
    }
});

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNING AT: ${url} :`);
})