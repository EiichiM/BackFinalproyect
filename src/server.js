require("dotenv").config();
const {GraphQLServer}= require ("graphql-yoga")
const {importSchema}= require ("graphql-import")


const typeDefs = importSchema('./schema.graphql');
const {makeExecutableSchema}= require ("graphql-tools")

const verifyToken = require("./services/verifyToken");
const { AuthDirective } = require("./services/AuthDirective");

const mongoose = require("mongoose");
const URL = process.env.NODE_ENV == "test" ? process.env.MONGO_URL_TEST : process.env.URL
mongoose.connect(URL, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Conectado a Mongo'); }
})

//Mutations
const { createUser, login, addPhoto } = require('./resolvers/Mutations/auth');
const { createProduct } = require('./resolvers/Mutations/product');

//Querys
const { getAllProducts, getIdProduct } = require("./resolvers/Querys/product");


const resolvers = {
    Query: {
        getAllProducts,
        getIdProduct
    },
    Mutation: {
        createUser,
        login,
        createProduct,
        addPhoto
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirective
    }
})
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: async ({ request }) => verifyToken(request)
})

const options = {
    port: process.env.PORT || 4000,
    cors: { "origin": "*" }
}
server.start(options, ({ port }) => console.log(`Graphql corriendo en puerto: ${port}`))

module.exports = { schema }