import { Octokit } from 'octokit';

const RESULTS_PER_PAGE = 10; // Maximum per page
const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN || "";
const octokit = new Octokit({ auth: token });

export const fetchRepositories = async (filter = '', page = 1) => {
  const response = await octokit.rest.search.repos({
    q: filter,
    per_page: RESULTS_PER_PAGE,
    page,
  });

  return response.data.items;
};

export const fetchUsers = async (searchQuery = '', page = 1) => {
  const afterCursor = page > 1 ? `after: "${page - 1}"` : '';

  const query = `
    query($searchQuery: String!, $after: String) {
      search(query: $searchQuery, type: USER, first: ${RESULTS_PER_PAGE}, after: $after) {
        edges {
          node {
            ... on User {
              name
              login
              avatarUrl
              bio
              followers {
                totalCount
              }
              following {
                totalCount
              }
              repositories {
                totalCount
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  const variables = {
    searchQuery: searchQuery,
    after: afterCursor ? afterCursor : null,
  };
  try {
    const response = await octokit.graphql(query, {
      ...variables,
    });

    // @ts-expect-error ignoring type from octokit
    return response.search.edges.map(edge => edge.node);
  } catch (e) {
    console.error(e);
    return [];
  }
};
