import { users } from '../dummyData/data.js';

const userResolver = {
    Query: {
        users: () => users,
        user: (_, { _id }) => users.find((user) => user._id === _id)
    },
    Mutation: {}
};

export default userResolver;