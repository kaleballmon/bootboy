import React from "react";
import styles from "./styles.module.css";
import { loadableP5 as P5Wrapper } from "./loadable";
import Sketch from "./sketch";

export default ({ src }) => {
  return <P5Wrapper style={{ zIndex: "-100" }} sketch={Sketch} src={src} />;
};
