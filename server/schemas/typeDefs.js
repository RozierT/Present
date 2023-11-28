const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    friends: [ID]
    scrapbook: [ID]
    flairScores: [flairScore]
  }

  type flairScore {
    tag: String
    score: Int
  }

  type Profile {
    _id: ID!
    username: String!
    userId: ID!
    bio: String
    profilePicture: String
    links: [Link]
    latestPosts: [Post]
  }

  type Post {
    _id: ID
    userId: ID
    dateCreated: String
    content: String
    title: String
    textContent: String
    likes: [ID]
    flairs: [String]
    commentable: Boolean
    comments: [Comment]
    shouldRendering: Boolean
    recencyScore: Int
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

  input flairScoreInput {
    tag: String
    score: Int
  }


  type Query {
    userPrefs: [flairScore]

    me: Profile
    getOthersProfile(userId: ID!): Profile

    getWeightedPosts(flair: String, recencyScore: Int, dateRange: [String]): [Post]
    getPostById(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String! password: String!): Auth
    addProfile(username: String!, bio: String, profilePicture: String, userId: ID): Profile
    updateUserPrefs(input: [flairScoreInput]): User

    createPost(content: String!, textContent: String!, flairs: [String!]!): Post
  }
`;

module.exports = typeDefs;
