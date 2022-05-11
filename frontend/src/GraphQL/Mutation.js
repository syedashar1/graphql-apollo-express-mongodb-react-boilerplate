import { gql } from "@apollo/client";
export const CREATE_POST = gql`
  mutation createPost($title: String!, $description: String) {
    createPost(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id :ID , $title: String, $description: String) {
    updatePost(post: { id : $id , title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;


export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;