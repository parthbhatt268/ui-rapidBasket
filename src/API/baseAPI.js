import axios from "axios";


let headers = {
  "content-type": "application/json; charset=utf-8",
  "authorization" : localStorage.getItem("basket_token") ? `Bearer ${localStorage.getItem("basket_token")}` : ""
};

export const apiCall = async (url, method, payload) => {
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
