// Personal API Key for OpenWeatherMap API
/*const apiKey = 'b3d763404d8794a5874f13c2eb684722';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const zip = '11204';
const letters = ',us&appid='
//const heroku = 'https://cors-anywhere.herokuapp.com/'
const url = baseUrl + zip + letters + apiKey;
const port = 3000;

const getData = async () => {
  const request = await fetch(url, { method: 'GET', });
  try {
    // Transform into JSON
    const allData = await request.json()
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML = allData.date;
    return allData;
  }
  catch (error) {
    console.log('error', error);
    // appropriately handle the error
    document.getElementById('content').innerHTML = 'Error: couldn\'t get data from the server.';
  }
}*/

const postDataToServer = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'same-origin',
    headers: { 'content-type': 'application.json' },
    body: JSON.stringify({'data': 'data to be immediately posted to server'})
  });
  try {
    console.log('response: ' + response.ok)
  }
  catch (error) {
    console.log(`Error posting data to the server:  ${error}`);
  }
}

/*const getDataFromServer = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'no-cors',
  });
  try {
    const data = await response.json();
    //console.log(response)
    console.log(data)
    console.log('success')
    return data;
  }
  catch (error) {
    console.log(response)
    console.log('This is the error with getting data from the server:  ' + error);
  }
}*/

//document.getElementById('generate').addEventListener('click', () => {
//getData().then(function (allData) {
  //postDataToServer('', { 'data': 'data to be posted to server' })
//});
postDataToServer('http://localhost:3000', { 'data': 'data to be posted to server' })
//getDataFromServer('')

