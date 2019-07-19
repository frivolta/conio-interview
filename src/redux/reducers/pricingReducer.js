/** @format */

import { GET_PRICE } from "../actionType";

const initialState = {
  price: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRICE:
      return {
        ...state,
        price: action.payload
      };
    default: return state
  }
}
