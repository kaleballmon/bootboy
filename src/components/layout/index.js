import React from "react";
import Header from "../header";
import styles from "./styles.module.css";
import { Helmet } from "react-helmet";
import faviconApple from "../../static/favicon/apple-touch-icon.png";
import favicon32 from "../../static/favicon/favicon-32x32.png";
import favicon16 from "../../static/favicon/favicon-16x16.png";

export default ({ children }) => {
  return (
    <div className={styles.body}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The artist Howard White, also known as Boot Boy"
        />
        <meta name="keywords" content="Photography, Art, Film" />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
