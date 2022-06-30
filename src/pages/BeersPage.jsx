// import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeerCard } from '../components/BeerCard/BeerCard';
import {
	beerState,
	getBeers,
	addToFavorites,
} from '../store/slices/beers.store';
import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { Pagination } from '../components/misc/Pagination';
import { useQuery } from '../hooks/useQuery';
import { useHistory } from 'react-router-dom';
import { SearchInput } from '../components/misc/SearchInput';
import { NotFoundMsg } from '../components/misc/NotFoundMsg';
import { BeerDetailsModal } from '../components/modals/BeerDetailsModal';
import { SmallBtn } from '../components/buttons/SmallBtn';

export const BeersPage = () => {
	const history = useHistory();
	const query = useQuery();
	const dispatch = useDispatch();

	const { beers } = useSelector(beerState);
	const currPage = query.get('page');
	const currFood = query.get('food');

	const [queryParams, setQueryParams] = useState({
		page: !currPage ? 1 : currPage,
		food: !currFood ? '' : currFood,
	});

	const [beerDetails, setBeerDetails] = useState(null);

	useEffect(() => {
		if (currPage !== queryParams.page)
			history.push(`/beers?page=${queryParams.page}`);
		if (queryParams.food && currFood !== queryParams.food)
			history.push(`/beers?page=${queryParams.page}&food=${queryParams.food}`);
		if (!queryParams.food && currFood)
			history.push(`/beers?page=${queryParams.page}`);

		dispatch(getBeers(queryParams));
	}, [dispatch, queryParams]);

	const onNextClicked = () => {
		if (beers.length < 9) return;
		setQueryParams((prev) => ({ ...prev, page: +queryParams.page + 1 }));
	};

	const onPrevClicked = () => {
		if (queryParams.page === 1) return;
		setQueryParams((prev) => ({ ...prev, page: +queryParams.page - 1 }));
	};

	const onSearchClicked = (e) => {
		e.preventDefault();
		setQueryParams({ page: 1, food: e.target[0].value });
	};

	const onBeerDetailsClicked = (beerId = null) => {
		if (!beerDetails) {
			const beerForDisplay = beers.find((beer) => beer.id === beerId);
			setBeerDetails(beerForDisplay);
		} else {
			setBeerDetails(null);
		}
	};

	const onAddFavoriteClicked = (beerId) => {
		const favoriteBeer = beers.find((beer) => beer.id === beerId);
		dispatch(addToFavorites(favoriteBeer));
	};

	const isNoBeers = beers && !beers.length && true;

	console.log('rendered');

	return (
		<div className="container flex flex-col">
			<div className="flex w-full">
				<SearchInput onSearchClicked={onSearchClicked} />
				<Pagination
					onNextClicked={onNextClicked}
					onPrevClicked={onPrevClicked}
					page={queryParams.page}
				/>
			</div>
			{isNoBeers ? (
				<NotFoundMsg />
			) : beers ? (
				<div className="columns-xs pb-20 ">
					{beers.map((beer) => (
						<BeerCard
							beer={beer}
							key={beer.id}
							onBeerDetailsClicked={onBeerDetailsClicked}
							onAddFavoriteClicked={onAddFavoriteClicked}
							actionBtn={
								<SmallBtn
									type="generic"
									txt="Add to favorites"
									handleClick={() => onAddFavoriteClicked(beer.id)}
								/>
							}
							details={
								<SmallBtn
									type="details"
									txt="Details"
									handleClick={() => onBeerDetailsClicked(beer.id)}
								/>
							}
						/>
					))}
				</div>
			) : (
				<div className="flex justify-center items-center ">
					<LoadingSpinner />
				</div>
			)}
			{beerDetails && (
				<BeerDetailsModal
					onBeerDetailsClicked={onBeerDetailsClicked}
					beer={beerDetails}
				/>
			)}
		</div>
	);
};
