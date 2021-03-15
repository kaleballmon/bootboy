import React from "react";
import Layout from "../components/layout";
import MovingPicture from "../components/movingpicture";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>BOOT BOY VISION</title>
      </Helmet>
      {data.contentfulVisionBoard.pictures.map((e) => (
        <MovingPicture key={e.id} src={e.file.url} i />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    contentfulVisionBoard {
      pictures {
        file {
          fileName
          url
        }
        id
      }
    }
  }
`;
