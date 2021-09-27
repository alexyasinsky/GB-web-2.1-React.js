import Area from "../../components/Area";
import {useRequestApi} from "../../hooks/useRequestApi";
import {beerApi} from "../../api";
import {Button} from "@material-ui/core";

import { getBeerFromRestApi } from '../../store/beer/actions';
import {useDispatch} from "react-redux";

import './style.scss';
import { useEffect } from 'react';


export function Beer() {

	const getBeerState = useRequestApi({
		api: beerApi.getBeer,
		isAutoRun: true
	})

  let randomBeer = getBeerState.data[0] || '';

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBeerFromRestApi(beerApi.getBeer));
  // })


	return (
		<Area>
			{
				getBeerState.isLoading && <div>loading ...</div>
			}
			{
				getBeerState.isError && <div>error</div>
			}

			<img className={'beer__img'} src={randomBeer.image_url} alt='randomBeer'/>
			<Button onClick={getBeerState.request}>
				Попробовать снова
			</Button>
		</Area>
	)
}