import { GraphQLServer } from "graphql-yoga";
import db from "./db"
import Query from "./resolvers/Query"
import Mutation from "./resolvers/Mutation"
import Post from "./resolvers/Post"
import Comment from "./resolvers/Comment"
import User from "./resolvers/User"

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        User,
        Post,
        Comment
    },
    context: {
        db
    }
})
server.start(() => console.log("server running"))




//Named export
// import { message } from "./myModules"
// import add, { subtract } from "./math"
// console.log(message)
// console.log(add(2, 3))
// console.log(subtract(2, 3))

//Default export => Has no name. You can only have one