import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const HelloWorld = styled.p`
  color: red;
`;

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      url
    }
  }
`;
export const allPostsQueryVars = {
  skip: 0,
  first: 10
};

export default () => {
  return (
    <div>
      <HelloWorld>Hello World!</HelloWorld>
      <Query query={ALL_POSTS_QUERY} variables={allPostsQueryVars}>
        {({ loading, error, data: { allPosts, _allPostsMeta }, fetchMore }) => {
          if (error) return <ErrorMessage message="Error loading posts." />;
          if (loading) return <div>Loading</div>;

          return (
            <ul>
              {allPosts.map((post, index) => (
                <li key={post.id}>
                  <a href={post.url}>
                    {index + 1}. {post.title}
                  </a>
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    </div>
  );
};
