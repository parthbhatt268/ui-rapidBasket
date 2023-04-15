import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as types from "../Action/types";
import { apiCall } from "../../API/baseAPI";
import * as config from "../../config"

export const postOrderDetailPayment = createAsyncThunk(
    types.POST_ORDER_DETAIL,
    async (payload, { rejectWithValue }) => {
      try {
        const response = await apiCall(config.ORDER_POST, "POST", payload);
        console.log("API responsed",response.data)
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  
  export const getOrderHistory = createAsyncThunk(
    types.GET_ORDER_HISTORY,
    async (category,{ rejectWithValue }) => {
      try {
        const response = await apiCall(config.GET_ORDER_HISTORY + `?custId=${category}`, "GET");
        console.log("Get API responsed",response.data)
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


  export const saveDish = createAction(types.SAVE_DISH)

  export const incrementCount = createAction(types.INC_COUNT)

