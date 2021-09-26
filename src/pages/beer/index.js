import Area from "../../components/Area";
import {useRequestApi} from "../../hooks/useRequestApi";
import {beerApi} from "../../api";
import {Button} from "@material-ui/core";

import './style.scss';

export function Beer() {

	const getBeerState = useRequestApi({
		api: beerApi.getBeer,
		isAutoRun: true
	})

let randomBeer = getBeerState.data[0] || '';



	return (
		<Area>
			{
				getBeerState.isLoading && <div>loading ...</div>
			}
			{
				getBeerState.isError && <div>error</div>
			}

			<img className={'beer__img'} src={randomBeer.image_url}/>
			<Button onClick={getBeerState.request}>
				Попробовать снова
			</Button>
		</Area>
	)
}