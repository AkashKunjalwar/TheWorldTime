import { useState } from "react";
import { useDispatch } from "react-redux";

const FetchFunctions = () => {
  const [regionData, setRegionData] = useState([]);
  const dispatch = useDispatch();

  const FetchRegions = async () => {
    const response = await fetch("http://localhost:5000/api");
    const data = await response.json();
    setRegionData((prevState) => [...prevState, ...data.regions]);
  };

  const FetchRegion = async (id) => {
    const today = new Date();
    const response = await fetch(`http://localhost:5000/api/${id}`);
    const data = await response.json();
    // setInterval(() => {
    //   dispatch({
    //     type: "LOCATION_DETAILS",
    //     payload: data,
    //   });
    //   dispatch({
    //     type: "CALCULATE_DATE",
    //     payload: today.getUTCHours() + data.utcOffset,
    //   });
    //   dispatch({
    //     type: "CALCULATE_TIME",
    //     payload: today.getUTCHours() + data.utcOffset,
    //   });
    // }, 1000);
    dispatch({
      type: "LOCATION_DETAILS",
      payload: data,
    });
    dispatch({
      type: "CALCULATE_DATE",
      payload: today.getUTCHours() + data.utcOffset,
    });
    dispatch({
      type: "CALCULATE_TIME",
      payload: today.getUTCHours() + data.utcOffset,
    });
  };

  return {
    regionData,
    FetchRegions,
    FetchRegion,
  };
};

export default FetchFunctions;
