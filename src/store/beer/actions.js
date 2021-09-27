export const GET_BEER_STARTED = 'BEER::GET_BEER_STARTED';
export const GET_BEER_FAILURE = 'BEER::GET_BEER_FAILURE';
export const GET_BEER_SUCCESS = 'BEER::GET_BEER_SUCCESS';

export const getBeerStarted = payload => ({
  type: GET_BEER_STARTED,
  payload,
});

export const getBeerSuccess = payload => ({
  type: GET_BEER_SUCCESS,
  payload,
});

export const getBeerFailure = payload => ({
  type: GET_BEER_FAILURE,
  payload,
});

export const getBeer = (randomBeer) => (dispatch, getState) => {
  

}

// https://habr.com/ru/post/483314/