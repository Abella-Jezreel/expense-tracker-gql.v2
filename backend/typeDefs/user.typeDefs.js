const userTypeDefs = `  #graphql
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    profilePicture: String
    gender: String!
  }

  type Query {
    users: [User!]
    authUser: User
    user(_id: ID!): User
  }

  input SignUp {
    username: String!
    email: String!
    password: String!
    gender: String!
  }

  input Login {
    email: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }

  type Mutation {
    signUp(input: SignUp!): User
    login(input: Login!): User
    logout: LogoutResponse
  }
`;

export default userTypeDefs;
