import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL & Relay modern is cool!!!');
});

class Friend {
    constructor(id, {firstName, lastName, gender, language, email}) {
        this.id = id;
        this.firstName =firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.emaiemail =email;
    }
}

const friendDatabase = {};

const global = {
    getFriend: ({id}) => {
        return new Friend (id, friendDatabase[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    },
    updateFriend: ({id, input}) => {
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

const root = { friend: (args) => {
    return {
        "id": 12345,
        "firstName": "Maud",
        "lastName": "Hettinger",
        "gender": "female",
        "language": "English",
        "email": "email@email.com",
        "IDTyped": args.id
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on localhost:8080/graphql'));

