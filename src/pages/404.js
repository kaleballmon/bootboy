import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default () => (
  <Layout>
    <Helmet>
      <title>BOOT BOY 404</title>
    </Helmet>
    <p>Error. Code 404. Page Not Found.</p>
  </Layout>
);
