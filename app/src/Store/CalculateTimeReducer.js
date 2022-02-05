const initialState = {
  time: "",
};

const CalculateTimeReducer = (state = initialState, action) => {
  if (action.type === "CALCULATE_TIME") {
    const today = new Date();
    const minutes = today.getUTCMinutes();
    const seconds = today.getUTCSeconds();
    const calculatedTime = (Hours, Minutes, Seconds) => {
      let min = ((Hours * 60) % 60) + Math.floor(Minutes);
      let hours = Math.floor(Hours);
      let sec = ((Minutes * 60) % 60) + Seconds;
      if (min >= 60) {
        const rH = String(hours + 1);
        const rM = String(min - 60);
        if (sec >= 60) {
          const rH = String(hours + 1);
          const rM = String(min - 60 + 1);
          const rS = String(sec - 60);
          return rH + " hours " + rM + " minutes " + rS + " seconds";
        }
        return rH + " hours " + rM + " minutes " + sec + " seconds";
      } else {
        if (sec >= 60) {
          const rH = String(hours);
          const rM = String(min + 1);
          const rS = String(sec - 60);
          return rH + " hours " + rM + " minutes " + rS + " seconds";
        }
        return (
          String(hours) +
          " hours " +
          String(min) +
          " minutes " +
          sec +
          " seconds"
        );
      }
    };
    if (action.payload >= 24) {
      state.time = calculatedTime(action.payload - 24, minutes, seconds);
      return {
        time: state.time,
      };
    } else if (action.payload < 0) {
      state.time = calculatedTime(action.payload + 24, minutes, seconds);
      return {
        time: state.time,
      };
    } else {
      state.time = calculatedTime(action.payload, minutes, seconds);
      return {
        time: state.time,
      };
    }
  }
  return state;
};

export default CalculateTimeReducer;
