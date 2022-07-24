import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
      break;
    case types.logout:
      return {
        logged: false,
      };

    default:
        return state;
      break;
  }
};
