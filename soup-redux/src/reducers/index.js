import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false,
    inventoryData: [],
    loggingIn: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingData: false,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: '',
          loggingIn: false
        };
      case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingData: true,
          errorStatusCode: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingData: false,
          inventoryData: action.payload
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          fetchingData: false,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  