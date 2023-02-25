import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as types from "../Action/types";
import { apiCall } from "../../API/baseAPI";
import * as config from "../../config"

export const postRegister = createAsyncThunk(
  types.USER_SIGNUP,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await apiCall(config.SIGN_UP, "POST", payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const postLogin = createAsyncThunk(
  types.USER_LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await apiCall(config.LOGIN, "POST", payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const saveDish = createAction(types.SAVE_DISH)

export const saveFruit  = createAction(types.SAVE_FRUIT)
