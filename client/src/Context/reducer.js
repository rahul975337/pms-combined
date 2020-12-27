export const initialState = {
  user: null,
  admin: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ADMIN: "SET_ADMIN",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.admin,
      };
    default:
      return state;
  }
};

export default reducer;
