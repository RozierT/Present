import { gql } from '@apollo/client';

// this should only return posts id PLEASE EDIT
export const GET_WEIGHTED_POSTS = gql`
  query getWeightedPosts($flair: String, $recencyScore: Int, $dateRange: [String]) {
    getWeightedPosts(flair: $flair, recencyScore: $recencyScore, dateRange: $dateRange) {
      _id
    }
  }
`;

export const GET_PROFILE_BY_ID = gql`
  query getProfile($userId: ID!) {
    profile(userId: $userId) {
    username
    userId
    profilePicture
    bio
    links {
      imageSrc
      name
      url
    }
    latestPosts {
      _id
      userId
      dateCreated
      content
      title
      textContent
      likes
      flairs
      commentable
      comments {
        text
        userId
        dateCreated
        commentable
        _id
      }
      shouldRendering
      recencyScore
    }
  }
  }
`

// get a user's flair scores. id passed in resolver thru context
export const GET_FLAIR_SCORES = gql`
  query userPrefs {
    userPrefs {
      score
      tag
    }
}
`

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    getPostById(_id: $id) {
      _id
      commentable
      content
      dateCreated
      flairs
      likes
      recencyScore
      shouldRendering
      textContent
      title
      userId
    }
}
`

// get user by username
export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      userId
      profilePicture
      bio
      links {
        _id
        name
        url
        imageSrc
      }
      latestPosts {
        _id
        userId
        dateCreated
        imageSrc
        title
        description
        likes
        flairs
        commentable
        shouldRendering
        comments {
          text
          userId
          dateCreated
          commentable
          _id
        }
      }
    }
  }
`