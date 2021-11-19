import { GraphQLServer } from "graphql-yoga";
//Demo posts data
const posts = [{
    id: "1",
    title: "Today",
    body: "I'm learning graphQL",
    published: true,
    author: "1"
}, {
    id: "2",
    title: "Yesterday",
    body: "I was interviewing with moon lab",
    published: true,
    author: "2"
}
]
//Demo user data
const users = [{
    id: "1",
    name: "vibert",
    email: "vibert@gmail.com"
}, {
    id: "2",
    name: "Chio",
    email: "chio@gmail.com",
    age: 29
}, {
    id: "3",
    name: "Anna",
    email: "anna@gmail.com"
}]
//Demo comments data
const comments = [{
    id: "1",
    text: "Hey",
    author: "1",
    post: "1"
}, {
    id: "2",
    text: "This is cool",
    author: "1",
    post: "1"
}, {
    id: "3",
    text: "good morning",
    author: "2",
    post: "2"
}, {
    id: "4",
    text: "hey linda",
    author: "3",
    post: "2"
}]
//Type definitions (schema) multiple queries that we can use
const typeDefs = `
    type Query {
        greeting(name:String,position:String):String!
        add(numbers:[Float]!):Float!
        grades:[Int]!
        me: User!
        getpost:Post!
        users(query:String): [User!]!
        posts(query:String): [Post!]!
        comments:[Comment!]!
        
    }
    type Comment {
        id:ID!
        text:String!
        author:User!
        post:Post!
    }
    type User {
        id:ID!
        name:String!
        email:String!
        age:Int
        posts:[Post!]!
        comments:[Comment!]!
    }
    type Post {
        id:ID!
        title:String!
        body:String! 
        published:Boolean!
        author:User!
        comments:[Comment!]!
    }

`
//Resolvers
const resolvers = {
    Query: {
        comments() {
            return comments
        },
        users(parent, args, ctx, info) {
            if (!args.query) {
                return users
            } else {
                return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
            }
        },
        posts(parent, args, ctx, info) {
            if (!args.query) {
                return posts
            } else {
                return posts.filter(post => post.title.toLowerCase().includes(args.query.toLowerCase()) ||
                    post.body.toLowerCase().includes(args.query.toLowerCase())

                )
            }
        },
        add(parent, args) {
            if (args.numbers.length) {
                return args.numbers.reduce((a, b) => (a + b), 0)
            } else {
                return 0
            }
        },
        greeting(parent, args, ctx, info) {
            console.log(args.position)
            if (args.name) {
                return `Hello, ${args.name}!`
            } else {
                return "Hello!"
            }
            console.log(args)

        },
        grades(parent, args, ctx, info) {
            return [2, 3, 4, 1, 1, 3, 3]
        },
        me() {
            return {
                id: 2,
                name: "shineho",
                email: "gmm2223@gmail.com"
            }
        },
        getpost() {
            return {
                id: 3,
                title: "sdfw",
                body: "sdfa",
                published: true

            }
        }


    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find(user => user.id === parent.author)
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.post === parent.id)
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter(post => post.author === parent.id)
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.author === parent.id)
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find(user => user.id === parent.author)
        },
        post(parent, args, ctx, info) {
            return posts.find(post => post.id === parent.post)
        },
    }

}



const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log("server running"))




//Named export
// import { message } from "./myModules"
// import add, { subtract } from "./math"
// console.log(message)
// console.log(add(2, 3))
// console.log(subtract(2, 3))

//Default export => Has no name. You can only have one