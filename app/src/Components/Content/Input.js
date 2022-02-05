import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";
import FetchFunctions from "../../FetchDataFromBackend/FetchFunctions";
import { useDispatch } from "react-redux";

const Input = () => {
  const { regionData, FetchRegions } = FetchFunctions();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    FetchRegions();
    //eslint-disable-next-line
  }, []);

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const clickHandler = (e) => {
    setSearchValue("");
    dispatch({
      type: "GET_ID",
      payload: e.target.id,
    });
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Search for the location"
        value={searchValue}
      />
      <div className={styles.list}>
        <ul>
          {regionData
            .filter((searchedRegion) => {
              if (searchValue === "") {
                return searchedRegion;
              } else if (
                searchedRegion.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              ) {
                return searchedRegion;
              }
            })
            .map((region) => (
              <li onClick={clickHandler} id={region.id} key={region.id}>
                {region.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Input;
