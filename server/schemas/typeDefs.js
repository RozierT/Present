const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    friends: [User]
    currentAlbum: Album
    scrapbook: [Post]
  }

  type Profile {
    _id: ID
    username: String!
    bio: String
    profilePicture: String
    links: [String]
  }

  type Post {
    _id: ID
    dateCreated: String!
    pictureURL: String
    caption: String
    createdBy: String!
    likes: Int
    tags: [String]
    comments: [Comment]
  }

  type Comment {
    commentText: String!
    commentAuthor: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;
