// Personal API Key for OpenWeatherMap API
const apiKey = '276e18283568dbad373c7c990407a6bb&units=imperial';
const baseUrl = 'https://openweathermap.com;'
//const heroku = 'https://cors-anywhere.herokuapp.com'
const url = baseUrl + apiKey;
const port = 3000;

const getData = async () => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML = allData.date;
    console.log('done');
  }
  catch (error) {
    console.log('error', error);
    // appropriately handle the error
    document.getElementById('content').innerHTML = 'Error: couldn\'t get data from the server.';
  }
}

//const getDataFromServer = async (url = `http://localhost:${port}`, data = a) => {
const getDataFromServer = async (url = `http://localhost:${port}`) => {
  const response = await fetch(url, {method: 'GET',});
  const data = await response.json();
  console.log('done');  
  console.log(data);
};

//document.getElementById('generate').addEventListener('click', () => {
//  getData();
//});

getData();