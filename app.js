const cityFORM = document.querySelector('form');

const updateCity = async (myLocation) => {
    
    const cityDetails = await getCity(myLocation);
    const weather = await getWeather(cityDetails);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
};

cityFORM.addEventListener('submit', event => {
    // prevent default action
    event.preventDefault();

    // get city value
    const myLocation = cityFORM.city.value.trim();
    cityFORM.reset();

    // update ui with new city
    updateCity(myLocation)
        .then(data => console.log(data))
        .catch(err => console.log(err));




});