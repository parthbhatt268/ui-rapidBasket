import * as types from "./types";
import * as constants from "./types"
//import Axios from "axios";
//import { ActionTypes } from "@mui/base";

export const saveFruit = ()=>{
    return{
        type: "SAVE_FRUIT",
        payload: action.payload
    }
}

export const saveDish = (data) => {
    return{
        type: constants.SAVE_DISH,
        payload: data
    }
}