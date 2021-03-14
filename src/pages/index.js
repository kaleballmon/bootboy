import React from "react";
import Layout from "../components/layout";
import Roulette from "../components/roulette";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default ({ data }) => {
  const shoots = data.allContentfulShoot.edges;
  return (
    <Layout>
      <Helmet>
        <title>BOOT BOY</title>
      </Helmet>
			{shoots.map((node) => (
				<Roulette key={node.node.id} node={node.node} />
			))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulShoot(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
					embedLinks
          name
					nameLink
          photos {
            id
            file {
              fileName
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
