/** @format */

import { combineReducers } from "redux";
import pricingReducer from '../redux/reducers/pricingReducer';
import loadingReducer from '../redux/reducers/loadingReducer';
import errorReducer from '../redux/reducers/errorReducer';

export default combineReducers({ pricingReducer, loadingReducer, errorReducer });
