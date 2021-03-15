import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ pageId }) => {
  const [page, setPage] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPage(window.location.pathname.replaceAll("/", ""));
    }
  });
  return (
    <header className={styles.header}>
      <span>
        Howard White +1(225)603-6585{" "}
        <a className={styles.link} href="mailto:bootboyphotos@gmail.com">
          bootboyphotos@gmail.com
        </a>
      </span>
      <br />
      <span>
        <Link
          style={
            page === "" ? { color: "black", textDecoration: "underline" } : {}
          }
          to="/"
        >
          Portfolio
        </Link>
        {", "}
        <Link
          style={
            page === "info"
              ? { color: "black", textDecoration: "underline" }
              : {}
          }
          to="/info"
        >
          Info
        </Link>
        {", "}
        <a
          className={styles.link}
          href="http://www.instagran.com/bootboyphotos/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        {", "}
        <Link
          style={
            page === "vision"
              ? { color: "black", textDecoration: "underline" }
              : {}
          }
          to="/vision"
        >
          Vision Board
        </Link>
      </span>
    </header>
  );
};
