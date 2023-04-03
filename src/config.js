export const runLocally = () => window.location.hostname && /^localhost$/.test(window.location.hostname);
const HOST_URL ="https://upset-shorts-newt.cyclic.app/api/v1/rapidBasket/"
const HOST_URL_LOCAL = window.location.hostname + "localhost:8000/api/v1/rapidBasket/"

//Login
export const LOGIN = HOST_URL + "login";
//Register
export const SIGN_UP = HOST_URL + "signup";


//--------------------GET API-----------------------//
//Get Profile Data
export const PROFILE_GET = HOST_URL + "getprofile"
//Get Food Item By Category
export const GET_FOODITEM_BY_CATEGORY = HOST_URL + "getfooditems"
//Get Order History
export const GET_ORDER_HISTORY = HOST_URL + "getOrderHistoryy"

//--------------------POST API-----------------------//
//Post Profile Data
export const PROFILE_POST = HOST_URL + "postprofile"
//Post Order Detail
export const ORDER_POST = HOST_URL + "postOrder"




