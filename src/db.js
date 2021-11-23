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

const db = {
    users,
    posts,
    comments
}

export { db as default }