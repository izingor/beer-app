import axios from 'axios';


export const beerService = {
    query
};




async function query(filterBy = null) {

    const page = filterBy?.page ? filterBy.page : '1';
    const food = filterBy?.food ? `&food=${filterBy.food}` : '';

    try {
        const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9${food}`);
        return res.data;
    } catch (err) {
        console.log('Had an error while getting you beers', err);
    }

}

