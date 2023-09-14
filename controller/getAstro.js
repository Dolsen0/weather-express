import axios from "axios"

export default function getAstro(req, res){
    axios.get(`http://api.weatherapi.com/v1/astronomy.json?key=${process.env.KEY}&q=33065&dt=2023-09-14
    `)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Failed to fetch weather data.");
    });
}
