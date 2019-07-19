/** @format */

import { SET_ERROR, CLEAR_ERROR } from "../actionType";

const initialState = {
  error: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: ''
      }
    default: return state
  }
}
