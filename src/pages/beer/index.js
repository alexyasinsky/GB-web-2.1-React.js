import Area from "../../components/Area";
import {Button} from "@material-ui/core";

import {getBeer} from '../../store/beer/actions';
import {useDispatch, useSelector} from "react-redux";

import './style.scss';
import { useEffect } from 'react';


export function Beer() {

  const dispatch = useDispatch();

  const {isLoading, isError, randomBeer } = useSelector(state => state.beer);
	
  const requestForRandomBeer = () => {
    dispatch(getBeer());
  }

  useEffect(()=> {
		dispatch(getBeer());
	}, [dispatch])



	return (
		<Area>
			{
				isLoading && <div>loading ...</div>
			}
			{
				isError && <div>error</div>
			}

			<img className={'beer__img'} src={randomBeer.image_url} alt='randomBeer'/>
			<Button onClick={requestForRandomBeer}>
				Попробовать снова
			</Button>
		</Area>
	)
}