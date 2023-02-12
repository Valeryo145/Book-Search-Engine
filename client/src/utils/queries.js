//Front-End Specifications This will hold the query USER_QRY, which will execute the me query set up using Apollo Server.

import { gql } from "@apollo/client";

export const USER_QRY = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
