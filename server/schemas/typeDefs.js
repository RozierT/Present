const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    friends: [User]
    scrapbook: [Post]
  }

  type Profile {
    _id: ID
    username: String!
    userId: String
    bio: String
    profilePicture: String
    links: [Link]
    latestPosts: [Post]
  }

  type Post {
    _id: ID
    userId: ID
    dateCreated: String
    imageSrc: String
    title: String
    description: String
    likes: Int
    flairs: [String]
    commentable: Boolean
    comments: [Comment]
    shouldRendering: Boolean
  }

  type Comment {
    _id: ID
    userId: ID
    dateCreated: String
    text: String!
    commentable: Boolean
    reply: Comment
  }

  type Link {
    _id: ID
    name: String!
    url: String!
    imageSrc: String!
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    user(_id: ID!): Profile
    friends(_id: ID!): [User]
    scrapbook(_id: ID!): [Post]
    post(_id: ID!): Post
    postByflair(flair: String!): [Post]
    postByLikes: [Post]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
