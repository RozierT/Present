import { gql } from '@apollo/client';

// this should only return posts id PLEASE EDIT
export const GET_POSTS = gql`
  query getPosts($flares: [String], $recencyScore: Int, $dateRange: [String]) {
    posts(flares: $flares, recencyScore: $recencyScore, dateRange: $dateRange) {
      dateCreated
      userId
      imageSrc
      title
      description
      likes
      flares
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

export const GET_FLAIR_SCORES = gql`
  query 
`