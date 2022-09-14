export default (logos = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_LOGOS":
      return action.payload;
    case "FETCH_FILTERED":
      return action.payload;
    case "CREATE_LOGO":
      return [...logos, action.payload];
    case "DELETE_LOGO":
      return logos.filter((logo) => logo._id !== action.payload);
    default:
      return logos;
  }
};
