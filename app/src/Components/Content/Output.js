import React, { useEffect } from "react";
import styles from "./Output.module.css";
import { useSelector } from "react-redux";
import FetchFunctions from "../../FetchDataFromBackend/FetchFunctions";

const Output = () => {
  const { location, useDTS } = useSelector((state) => state.SendOutputReducer);
  const date = useSelector((state) => state.CalculateDateReducer.date);
  const time = useSelector((state) => state.CalculateTimeReducer.time);
  const id = useSelector((state) => state.GetIDReducer.id);
  const { FetchRegion } = FetchFunctions();

  useEffect(() => {
    const timeOut = setInterval(() => {
      FetchRegion(id);
    }, 1000);
    // FetchRegion(id);
    return () => {
      clearInterval(timeOut);
    };
  }, [id]);

  return (
    <div className={styles.output}>
      <input type="text" placeholder="Location" value={location} disabled />
      <input type="text" placeholder="Date" value={date} disabled />
      <input type="text" value={time} disabled />
      <input
        type="text"
        value={
          useDTS ? "This region is a DTS zone" : "This region is not a DTS zone"
        }
        disabled
      />
    </div>
  );
};

export default Output;
