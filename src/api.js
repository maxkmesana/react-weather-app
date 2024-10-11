const baseUrl = "http://api.weatherapi.com/v1";

export async function getCurrentWeatherByCity(city = ""){
    try {
    const response = await fetch(`${baseUrl}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`);
        if(!response.ok){
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}