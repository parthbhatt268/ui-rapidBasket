import * as types from "./Action/types";
const initialState = {
  loginStatus: [],
  errorStatus: false,
  errorMsg: [],
  loading: false,
  fruit: "Apple",
  savedDish: [],
  menuItems: [],
  profileDetails: [],
  orderAck: [],
  orderHistory: [],
  errorOpen: false,
  checkoutCount: 0,
  feedbackResponse: []
};

// ----------------Logic for Calculating How many item of which which products are selected in Basket------------//
// ----- what logic does is when it find same name enter for second time then instead of update that item count to 2 it actually replaces that item row with updated order ,
// which is carring 2 in its payload to we replace instead of update existing one ---------------//
let finalBucket = []

const saveDishFunction = (state, action) => {
  let bucket = action.payload
  const already = finalBucket.findIndex(
    (item) => item.p_name === bucket.p_name
  )
  if (already == -1) {
    var lenghtValue = finalBucket.length
    finalBucket[lenghtValue] = {
      p_name: bucket.p_name,
      p_itemCount: bucket.p_itemCount,
      p_price: bucket.p_price,
      p_amount: bucket.p_amount,
    }
  }
  else {
    if(bucket.p_itemCount === 0){
let newB  = finalBucket.filter(row => row.p_name  !== bucket.p_name )
finalBucket = newB
    }else{
    finalBucket[already] = {
      p_name: bucket.p_name,
      p_itemCount: bucket.p_itemCount,
      p_price: bucket.p_price,
      p_amount: bucket.p_amount,
    }
  }

  }
  let checkoutcount = 0
   checkoutcount = finalBucket?.map(item =>   (checkoutcount + item.p_itemCount))
   const sum = checkoutcount.reduce((partialSum, a) => partialSum + a, 0);
  return {
    ...state,
    savedDish: finalBucket,
    checkoutCount : sum
  };
};

const saveMenuItems = (state, action) => {

  return {
    ...state,
    errorMsg: [],
    menuItems: action.payload,
    loading: false
  }
}


export const reducer = (state = initialState, action) => {
  if (action.type.includes('pending')) {
    state.loading = true
  }
  if (action.type.includes('rejected')) {
    state.loading = false
    state.errorOpen = true
    state.errorMsg = action.payload
    state.errorStatus = "Error"
  }
  switch (action.type) {
    case `${types.USER_LOGIN}/fulfilled`:
      return {
        ...state,
        loginStatus: action.payload,
        errorMsg: [],
        loading: false
      };
    case `${types.USER_SIGNUP}/fulfilled`:
      return {
        ...state,
        errorMsg: [],
        loginStatus: action.payload,
        loading: false
      }
    case `${types.GET_PROFILE}/fulfilled`:
      return {
        ...state,
        errorMsg: [],
        profileDetails: action.payload,
        loading: false
      }
    case `${types.POST_ORDER_DETAIL}/fulfilled`:
      return {
        ...state,
        errorMsg: [],
        savedDish : [],
        orderAck: action.payload,
        loading: false
      }
    case `${types.GET_ORDER_HISTORY}/fulfilled`:
      return {
        ...state,
        errorMsg: [],
        orderHistory: action.payload,
        loading: false
      }
    case `${types.GET_FOODITEM_BY_CATEGORY}/fulfilled`:
      return saveMenuItems(state, action)
    case types.CLEAR_ERROR:
      return {
        ...state,
        errorMsg: []
      }
    case types.SAVE_DISH:
      return saveDishFunction(state, action)
   
    case `${types.POST_SUBMIT_FEEDBACK}/fulfilled`:
      return {
        ...state,
        feedbackResponse: action.payload,
        loading: false
      }
    default:
      return { ...state };
  }
};
