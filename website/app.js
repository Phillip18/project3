// Personal API Key for OpenWeatherMap API
const apiKey = '276e18283568dbad373c7c990407a6bb&units=imperial';
const baseUrl = 'https://openweathermap.com;'

const retrieveData = async () => {
  const request = await fetch('/all');
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

const a = "You are a cretin";
const getDataFromServer = async (url = '', data = a) => {
  const response = await fetch(url, {method: 'GET',});
    console.log('response: ' + response);
};
getDataFromServer();

//document.getElementById('generate').addEventListener('click', () => {
//  getData();
//});
