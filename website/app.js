// Personal API Key for OpenWeatherMap API
const apiKey = '8e204443b8f65beaafb4737d4e9f3dc0&units=imperial';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const zip = '11204';
const letters = ',us&appid='
const heroku = 'https://cors-anywhere.herokuapp.com/'
const url = heroku + baseUrl + zip + letters + apiKey;
const port = 3000;

const getData = async () => {
  console.log('https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}')
  console.log(url)
  const request = await fetch(url, {method: 'GET',});
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