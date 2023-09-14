import axios from 'axios';


export default function getWeather(req, res) {
    let location = req.params.location

    let url = `http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${location}&aqi=no`;
    console.log('URL:', url);

    
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${location}&aqi=no`)
    .then(response => {
        return response.data;
    })
    .then(data => {
        res.send(data);
    })
    .catch((error) => {
        if (error.response) {
          console.log('Error status:', error.response.status);
          console.log('Error data:', error.response.data);
        } else if (error.request) {
          console.log('No response was received', error.request);
        } else {
          console.log('Error', error.message);
        }
        res.status(500).send("Failed to fetch weather data.");
      });
}
