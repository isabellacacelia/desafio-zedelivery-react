import { gql } from "apollo-boost";

const allCategory = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

export default allCategory;
