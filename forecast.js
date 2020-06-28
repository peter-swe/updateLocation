const key = 'HqphE9BKK7COQeuqpOlcMWFgVxvMKi4V';

// get weather info
const getWeather = async (locID) => {

    const baseW = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryW =`${locID}?apikey=${key}`;

    const responseW = await fetch(baseW + queryW);
    const dataW = await responseW.json();

    return dataW[0];
};


// get city info

const getCity = async (myLocation) => {
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query =`?apikey=${key}&q=${myLocation}`;

    const response = await fetch(base + query)
    const data = await response.json();

    return data[0];
};
// getCity('manchester').then(data => {
//     return getWeather(data.Key);
//     }).then(dataW => {
//         console.log(dataW)
//     })
//     .catch(err => console.log(err));

