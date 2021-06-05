const INITIAL_STATE = {
  List: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ITEM_LIST":
      return { ...state, List: action.payload };
    case "GET_ITEM_ERROR":
      return { ...state, List: action.payload };
    default:
      return state;
  }
};
