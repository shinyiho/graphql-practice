const Query = {
    comments(parent, args, { db }, info) {
        return db.comments
    },
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        } else {
            return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
        }
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        } else {
            return db.posts.filter(post => post.title.toLowerCase().includes(args.query.toLowerCase()) ||
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


}

export { Query as default }