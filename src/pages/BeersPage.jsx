// import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeerCard } from '../components/BeerCard/BeerCard';
import { beerState, getBeers } from '../store/slices/beers.store';
import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { Pagination } from '../components/misc/Pagination';
import { useQuery } from '../hooks/useQuery';
import { useHistory } from 'react-router-dom';
import { SearchInput } from '../components/misc/SearchInput';

export const BeersPage = () => {
	const history = useHistory();
	const query = useQuery();
	const dispatch = useDispatch();

	const { beers } = useSelector(beerState);
	const currQueryPage = query.get('page');
	const currQueryFood = query.get('food');

	const [page, setPage] = useState(!currQueryPage ? 1 : currQueryPage);
	const [food, setFood] = useState(!currQueryFood ? '' : currQueryFood);
	// const [abv, setAbv] = useState(!currQueryAbv ? null : currQueryAbv);
	// console.log('query', query.get('page'));
	// console.log('location', location.pathname);

	console.log(beers);

	useEffect(() => {
		if (currQueryPage !== page) history.push(`/beers?page=${page}`);
		if (food && currQueryFood !== food)
			history.push(`/beers?page=${page}&food=${food}`);
		// if (currQueryAbv && currQueryFood)
		// 	history.push(`/beers?page=${page}&food=${food}&abv=${currQueryAbv}`);

		dispatch(getBeers({ page, food }));
	}, [dispatch, page, food]);

	const onNextClicked = () => {
		setPage(+page + 1);
		console.log('next clicked');
		// history.push(`/beers?page=${page}`);
	};

	const onPrevClicked = () => {
		if (page === 1) return;
		setPage(+page - 1);
		// history.push(`/beers?page=${page}`);
	};

	const onSearchClicked = (e) => {
		e.preventDefault();
		setFood(e.target[0].value);
	};

	return (
		<div className="container flex flex-col items-center justify-center">
			{beers ? (
				// <div className='py-10 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
				<>
					<div className="flex justify-between w-full">
						<SearchInput onSearchClicked={onSearchClicked} />
						<Pagination
							onNextClicked={onNextClicked}
							onPrevClicked={onPrevClicked}
							page={page}
						/>
					</div>
					<div className="columns-xs">
						{beers.map((beer) => (
							<BeerCard beer={beer} key={beer.id} />
						))}
					</div>
				</>
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
};
