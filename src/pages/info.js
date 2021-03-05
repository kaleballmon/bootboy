import React from "react";
import Layout from "../components/layout";
import showdown from "showdown";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

const converter = new showdown.Converter();
const createMarkup = (m) => ({ __html: m });

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>BOOT BOY INFO</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={createMarkup(
          converter.makeHtml(data.contentfulInfoContentTextNode.content)
        )}
        style={{ fontSize: "17px" }}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulInfoContentTextNode {
      content
    }
  }
`;
