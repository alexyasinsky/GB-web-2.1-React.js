import Area from "../../components/Area";
import {useRequestApi} from "../../hooks/useRequestApi";
import {beerApi} from "../../api";
import {Button} from "@material-ui/core";

import {getBeer, getBeerStarted} from '../../store/beer/actions';
import {useDispatch, useSelector} from "react-redux";

import './style.scss';
import { useEffect } from 'react';


export function Beer() {

	const getBeerState = useRequestApi({
		api: beerApi.getBeer,
		isAutoRun: true
	})

  let randomBeer = getBeerState.data[0] || '';

  const dispatch = useDispatch();

  const randomBeer2 = useSelector(state => state.beer.randomBeer);
	console.log(randomBeer2);
	useEffect(()=> {
		dispatch(getBeer());
	}, [dispatch])



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