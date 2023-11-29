import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logout {
    logout {
      status
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String! $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// creates profile and returns(?) token and user id (intended for context)
export const CREATE_PROFILE = gql`
  mutation addProfile($username: String!, $bio: String, $profilePicture: String) {
    addProfile(username: $username, bio: $bio, profilePicture: $profilePicture) {
      userId
      username
      bio
      profilePicture
      _id
    }
  }
`

// update user prefs based off of input array and return token and user (id and new flairscores array)
export const UPDATE_USER_PREFS = gql`
  mutation updateUserPrefs($input: [flairScoreInput]) {
    updateUserPrefs(input: $input) {
      _id
      flairScores {
        score
        tag
      }
    }
  }
`

export const FOLLOW_USER = gql`
  mutation followUser($followUserId: ID!) {
    followUser(followUserId: $followUserId) {
      _id
      following
    }
  }
`

export const UNFOLLOW_USER = gql`
  mutation unFollowUser($unFollowUserId: ID!) {
    unFollowUser(unFollowUserId: $unFollowUserId) {
      _id
      following
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation createComment($textContent: String!, $username: String!, $profilePicture: String!, $postId: ID!) {
    createComment(textContent: $textContent, username: $username, profilePicture: $profilePicture, postId: $postId) {
      _id
      username
      userId
      comments {
        _id
      }
    }
  }
`
export const CREATE_POST = gql`
  mutation CreatePost($content: String!, $textContent: String!, $flairs: [String!]!, $username: String, $profilePicture: String) {
    createPost(content: $content, textContent: $textContent, flairs: $flairs, username: $username, profilePicture: $profilePicture) {
      _id
      username
      userId
      posts {
        _id
      }
    }
  }
`