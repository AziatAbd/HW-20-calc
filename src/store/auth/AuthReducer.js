export const authActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const initialState = {
  email: "",
  isAuthorized: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        email: action.payload,
        isAuthorized: true,
      };
    case authActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default AuthReducer;
