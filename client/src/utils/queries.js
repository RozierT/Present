import { gql } from '@apollo/client';

// this should only return posts id PLEASE EDIT
export const GET_WEIGHTED_POSTS = gql`
  query getPosts($flairs: [String], $recencyScore: Int, $dateRange: [String]) {
    posts(flairs: $flairs, recencyScore: $recencyScore, dateRange: $dateRange) {
      dateCreated
      userId
      imageSrc
      title
      description
      likes
      flairs
      commentable
      comments
      shouldRendering
      recencyScore
    }
  }
`;

export const GET_PROFILE = gql`
  query getProfile($userId: ID!) {
    profile(userId: $userId) {
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

// get a user's flair scores. id passed in resolver thru context
export const GET_FLAIR_SCORES = gql`
  query userPrefs {
  userPrefs {
    score
    tag
  }
}
`