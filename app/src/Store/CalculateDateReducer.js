const initialState = {
  date: "",
};

const CalculateDateReducer = (state = initialState, action) => {
  if (action.type === "CALCULATE_DATE") {
    const today = new Date();
    const hours = action.payload;
    const utcDate = today.getUTCDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (hours >= 24) {
      state.date =
        String(utcDate + 1) +
        "th of " +
        monthNames[month] +
        ", " +
        String(year);
      return {
        date: state.date,
      };
    } else if (hours < 0) {
      state.date =
        String(utcDate - 1) +
        "th of " +
        monthNames[month] +
        ", " +
        String(year);
      return {
        date: state.date,
      };
    } else if (0 < hours < 24) {
      state.date =
        String(utcDate) + "th of " + monthNames[month] + ", " + String(year);
      return {
        date: state.date,
      };
    }
  }
  return state;
};

export default CalculateDateReducer;
