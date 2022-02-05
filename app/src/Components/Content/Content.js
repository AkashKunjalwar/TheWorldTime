import React from "react";
import styles from "./Content.module.css";
import Input from "./Input";
import Output from "./Output";

const Content = () => {
  return (
    <div className={styles.row}>
      <Input />
      <Output />
    </div>
  );
};

export default Content;
