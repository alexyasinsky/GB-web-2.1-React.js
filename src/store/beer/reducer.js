import { GET_BEER_s } from './actions';

const initialState = {
  isLoading: '',
  isError: ''
  randomBeer: {},
}

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEER:
       
      return state;
    default:
      return state;
  }
}