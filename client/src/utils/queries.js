import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($flares: [String], $recencyScore: Int, $dateRange: [String]) {
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