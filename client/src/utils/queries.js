import { gql } from '@apollo/client';

// this should only return posts id
export const GET_WEIGHTED_POSTS = gql`
  query getWeightedPosts($flair: String, $recencyScore: Int, $dateRange: [String]) {
    getWeightedPosts(flair: $flair, recencyScore: $recencyScore, dateRange: $dateRange) {
      _id
    }
  }
`;

export const GET_PROFILE_BY_ID = gql`
  query getOthersProfile($id: ID!) {
    getOthersProfile(_id: $id) {
      _id
      bio
      profilePicture
      userId
      username
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
          _id
          text
          userId
          dateCreated
          commentable
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

export const GET_MY_PROFILE = gql`
  query Me {
    me {
      _id
      username
      userId
      profilePicture
      bio
      latestPosts {
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
        comments {
          _id
          commentable
          dateCreated
          reply {
            reply {
              text
              userId
              commentable
              _id
              dateCreated
            }
          }
        }
      }
    }
  }
}
`