/** @format */

import axios from "axios";
import { GET_PRICE, IS_LOADING, SET_ERROR, CLEAR_ERROR } from "../actionType";

// Set get Price
export const getPrice = () => dispatch => {
  dispatch(setUserLoading(true));
  dispatch(clearErrors());
  //Fetch API
  axios
    .get("https://blockchain.info/it/ticker")
    .then(success => {
      const result = success.data;
      dispatch(setUserLoading(false));
      const eurLatestPrice = getEur(result);
      return dispatch({
        type: GET_PRICE,
        payload: eurLatestPrice
      });
    })
    .catch(err => {
      dispatch(setUserLoading(false));
      console.log(err)
      dispatch({
        type: SET_ERROR,
        payload: 'Cannot loading price'
      });
    });
};

// Set is loading
export const setUserLoading = isLoading => {
  return {
    type: IS_LOADING,
    payload: isLoading
  };
};

//Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERROR,
    payload: ''
  }
}


/**
 * @description Get items and return price value or null
 * @returns number
 * @param object
 */
const getEur = (items) => {
  let latestPrice = null;
  if (items.hasOwnProperty('EUR')) {
    latestPrice = items.EUR.last
  }
  return latestPrice;
}
