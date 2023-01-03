// Personal API Key for OpenWeatherMap API
const apiKey = 'b3d763404d8794a5874f13c2eb684722&units=imperial';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
let zip = '';
const letters = ',us&appid='
let url = '';
//const heroku = 'https://cors-anywhere.herokuapp.com/'
const port = 3000;

const getData = async () => {
  const response = await fetch(url, { method: 'GET', });
  try {
    const allData = await response.json()
    return allData;
  }
  catch (error) {
    console.log('Error parsing data.')
  }
}

const postDataToServer = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'content-type': 'application/json', },
    body: JSON.stringify(data)
  });
  try {
    const data = await response.text()
    console.log(data);
    return data;
  }
  catch (error) {
    console.log(`Error getting data from response:  ${error}`);
    letKnowOfError()
  }
}

const getDataFromServer = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  try {
    const data = await response.json();
    display(data)
  }
  catch (error) {
    console.log('This is the error with getting data from the server:  ' + error);
  }
}

document.getElementById('generate').addEventListener('click', () => {
  zip = document.getElementById('zip').value;
  console.log(zip)
  url = baseUrl + zip + letters + apiKey;
  getData()
    .then(
      (allData) => {
        postDataToServer('http://localhost:3000', parseAndCombineWithZip(allData))
        .then(
          () => getDataFromServer('http://localhost:3000')
          )
    })
      .catch(
        (error) => {
        console.log(`error: ${error}`)
        letKnowOfError()
      }
    )
})

function display(allData) {
  document.getElementById('date').innerHTML = 'Date: ' + allData.date;
  document.getElementById('temp').innerHTML = 'Temperature: ' + Math.round(allData.temp) + ' degrees';
  document.getElementById('content').innerHTML = 'Feelings: ' + allData.feel;
}

function parseAndCombineWithZip(data) {
  return { 'zip': zip, 'date': getDate(), 'temp': data.main.temp, 'feelings': document.getElementById('feelings').value}
}

function getDate() {
  const date = new Date();
  return date.getMonth() + 1 + '/' + date.getDay() + '/' + date.getFullYear();
}

function letKnowOfError() {
  document.getElementById('date').innerHTML = ''
  document.getElementById('temp').innerHTML = ''
  document.getElementById('content').innerHTML = 'Error getting data from the third-party server.  Please check if zip code is correct.';
}
