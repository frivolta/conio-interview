/** @format */

import { IS_LOADING } from "../actionType";

const initialState = {
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default: return state
  }
}
