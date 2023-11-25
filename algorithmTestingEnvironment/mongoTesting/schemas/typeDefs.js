
const typeDefs = `
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    following: [User]
    followers: [User]
    lifetimePosts: [Post]
  }

  type Profile {
    _id: ID!
    userName: String!
    bio: String
    profilePicture: String
    userId: User!
    flairPref: [String]
    posts: [Post]
  }

  type Post {
    _id: ID!
    dateCreated: String!
    userId: User!
    profilePicture: String
    content: String!
    textContent: String
    likes: [User]
    flairs: [String]
    comments: [Comment]
    recencyScore: Int
  }

  type Comment {
    _id: ID!
    userId: User!
    profilePicture: String
    dateCreated: String!
    textContent: String!
  }

  type Notification {
    _id: ID!
    userId: User!
    profilePicture: String
    dateCreated: String!
    textContent: String!
  }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(_id: ID!): Profile
        following(_id: ID!): [User]
        followers(_id: ID!): [User]
        lifetimePosts(_id: ID!): [Post]
        post(_id: ID!): Post
        comment(_id: ID!): Comment
        comments: [Comment]
        notifications: [Notification]
        posts: [Post]
        postByflair(flair: String!): [Post]
        postByDate (date: String!): [Post]
        postByRecency (recency: Int!): [Post]

    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addProfile(userName: String!, bio: String, profilePicture: String, userId: ID!, flairPref: [String], posts: [ID]): Profile
        addPost(dateCreated: String!, userId: ID!, profilePicture: String, content: String!, textContent: String, likes: [ID], flairs: [String], comments: [ID], recencyScore: Int): Post
        addComment(userId: ID!, profilePicture: String, dateCreated: String!, textContent: String!): Comment
        addNotification(userId: ID!, profilePicture: String, dateCreated: String!, textContent: String!): Notification
        addFollowing(_id: ID!, following: [ID]): User
        addFollowers(_id: ID!, followers: [ID]): User
        addLifetimePosts(_id: ID!, lifetimePosts: [ID]): User 
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;