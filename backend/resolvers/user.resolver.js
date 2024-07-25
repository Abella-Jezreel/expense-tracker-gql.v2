import { users } from '../dummyData/data.js';

const userResolver = {
    Query: {
        users: (_, {req, res}) => users,
        user: (_, { _id }, {req, res}) => users.find((user) => user._id === _id)
    },
    Mutation: {}
};

export default userResolver;