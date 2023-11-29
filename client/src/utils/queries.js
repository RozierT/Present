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
  query getOthersProfile($userId: ID!) {
    getOthersProfile(userId: $userId) {
      _id
      username
      userId
      bio
      profilePicture
      links {
        _id
        name
        url
        imageSrc
      }
      posts {
        _id
        username
        profilePicture
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
  query getPostById($id: ID!) {
    getPostById(_id: $id) {
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
      }
      shouldRendering
      recencyScore
    }
  }
`

export const GET_MY_PROFILE = gql`
  query me {
    me {
      _id
      username
      userId
      bio
      profilePicture
      links {
        _id
        name
        url
        imageSrc
      }
      posts {
        _id
        username
        profilePicture
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
        }
        shouldRendering
        recencyScore
      }
    }
  }
`

export const GET_POSTS_BY_ID = gql`
  query getPostById($ids: [ID!]!) {
    getPostsById(ids: $ids) {
      _id
      username
      profilePicture
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
      }
      shouldRendering
      recencyScore
    }
  }
`
export const GET_THIS_USER = gql`
  query getUser {
    getUser {
      _id
      email
      firstName
      flairScores {
        score
        tag
      }
      lastName
      scrapbook
      following
    }
}
`

export const GET_POST_COMMENTS = gql`
  query getComments($ids: [ID!]!) {
  getComments(ids: $ids) {
    _id
    userId
    username
    profilePicture
    dateCreated
    textContent
    commentable
  }
}
`