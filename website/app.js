// Personal API Key for OpenWeatherMap API
const apiKey = '8e204443b8f65beaafb4737d4e9f3dc0&units=imperial';
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
}

const postDataToServer = async (url = '', data) => {
const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'content-type': 'application.json', },
    body: JSON.stringify("data")
  });
  try {
    console.log(response.json());
  }
  catch(error) {
    console.log(`Error posting data to the server:  ${error}`);
  }
}

const getDataFromServer = async (url = `http://localhost:${port}`) => {
console.log("You are a tripple cretin")
const response = await fetch(url, { method: 'GET', });
  const data = await response.json();
  return data;
};

//document.getElementById('generate').addEventListener('click', () => {
getData().then(function(allData) {
  postDataToServer(allData);
});
  //postDataToServer(allData)).then(display())
//});

function display() {
  console.log("You are a cretin")
}