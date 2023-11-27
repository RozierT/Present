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