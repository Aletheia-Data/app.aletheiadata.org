import gql from "graphql-tag";

export const CAT_QUERY = gql`
  query CategoriesGroup {
    categoriesConnection {
      groupBy {
        id {
          key
          connection {
            values {
              id
              title
              description
              icon {
                id
                name
                url
              }
            }
            aggregate {
              count
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const getCategoryQuery = (id: string) => {
  return `
  query TypeGroupBy {
    alexandriasConnection(where: {
      category: "${id}",
    }) {
      groupBy {
        type{
          key,
          connection{
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    }
  }
`;
};

export const getDepartmentQuery = (id: string) => {
  return `
  query TypeGroupBy {
    alexandriasConnection(where: {
      department: "${id}",
    }) {
      groupBy {
        type{
          key,
          connection{
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    }
  }
`;
};

export const getSourceQuery = (id: string) => {
  return `
  query TypeGroupBy {
    alexandriasConnection(where: {
      source: "${id}",
    }) {
      groupBy {
        type{
          key,
          connection{
            aggregate{
              count,
              totalCount
            }
          }
        }
      }
    }
  }
`;
};
