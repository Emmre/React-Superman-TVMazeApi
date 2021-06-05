import axios from "axios";

export const getItemList = () => async (dispatch) => {
  await axios
    .get("http://api.tvmaze.com/search/shows?q=superman")
    .then((response) => {
      dispatch({ type: "GET_ITEM_LIST", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "GET_ITEM_ERROR",
        payload: "ERROR 404 BRO",
      });
    });
};
