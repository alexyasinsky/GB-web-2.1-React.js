import { GET_BEER_FAILURE, GET_BEER_STARTED, GET_BEER_SUCCESS } from "./actions";

const initialState = {
  isAutorun: false,
  randomBeer: {},
  isError: ''
};

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEER_STARTED:
      return {
        ...state,
        isAutorun: true
      };
    case GET_BEER_SUCCESS:
      return {
        ...state,
        isAutorun: false,
        isError: null,
        randomBeer: action.payload.randomBeer
      };
    case GET_BEER_FAILURE:
      return {
        ...state,
        isAutorun: false,
        isError: action.payload.error
      };
    default:
      return state;
  }
}