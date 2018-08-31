// import schema from './schema.graphql';
import resolvers from './resolvers';
import Feature from '../connector';
import config from 'config';
import gql from 'graphql-tag';

var schema = gql`
input LoginUserInput {
  usernameOrEmail: String!
  password: String!
}

type Tokens {
  accessToken: String
  refreshToken: String
}

type AuthPayload {
  user: User
  tokens: Tokens
  errors: [FieldError!]
}

input RegisterUserInput {
  username: String!
  email: String!
  password: String!
}

input ForgotPasswordInput {
  email: String!
}

input ResetPasswordInput {
  token: String!
  password: String!
  passwordConfirmation: String!
}

type ResetPayload {
  errors: [FieldError!]
}

extend type Mutation {
  # Login user
  login(input: LoginUserInput!): AuthPayload!
  # Forgot password
  forgotPassword(input: ForgotPasswordInput!): String
  # Reset password
  resetPassword(input: ResetPasswordInput!): ResetPayload!
  # Register user
  register(input: RegisterUserInput!): UserPayload!
}
`

export default new Feature(
  config.user.auth.password.enabled
    ? {
        schema,
        createResolversFunc: resolvers
      }
    : {}
);