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

export const postProfileChanges = createAsyncThunk(
  types.POST_PROFILE_CHANGES,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await apiCall(config.PROFILE_POST, "POST", payload);
      console.log("API responsed",response.data)
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getProfile = createAsyncThunk(
  types.GET_PROFILE,
  async ( customerId, {rejectWithValue} ) => {
    try {
      const response = await apiCall(`${config.PROFILE_GET}?custId=${customerId}`, "GET");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const clearErrorMessage = createAction(types.CLEAR_ERROR)


