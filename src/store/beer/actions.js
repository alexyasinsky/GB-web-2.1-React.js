import { beerApi} from '../../api/requests/beer';

export const GET_BEER_STARTED = 'BEER::GET_BEER_STARTED';
export const GET_BEER_SUCCESS = 'BEER::GET_BEER_SUCCESS';
export const GET_BEER_FAILURE = 'BEER::GET_BEER_FAILURE';

export const getBeerStarted = () => ({
  type: GET_BEER_STARTED,
});

export const getBeerSuccess = randomBeer => ({
  type: GET_BEER_SUCCESS,
  payload: {
    randomBeer
  },
});

export const getBeerFailure = error => ({
  type: GET_BEER_FAILURE,
  payload: {
    error
  },
});

export const getBeer = () => (dispatch, getState) => {
    dispatch(getBeerStarted());
    beerApi.getBeerQuery()
      .then(data => {
        dispatch(getBeerSuccess(data[1][0]));
      })
      .catch(err => dispatch(getBeerFailure(err)))
}

// https://habr.com/ru/post/483314/