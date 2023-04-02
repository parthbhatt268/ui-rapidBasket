import axios from "axios";



export const apiCall = async (url, method, payload) => {
  let getToken = localStorage.getItem("basket_token")

  let headers = {
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers" : "GET,POST,OPTIONS,DELETE,PUT",
    "authorization" : `Bearer ${getToken}`
  };
  let args = {
    apiUrl: url,
    headers: headers,
  };
  if (method) {
    args.method = method;
  }
  if (payload) {
    args.payload = payload;
  }
  
    const res = await axios({
      method: args.method,
      url: args.apiUrl,
      data: args.payload,
      headers: headers,
    });
    return res
};
