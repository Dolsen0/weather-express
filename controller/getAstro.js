import axios from "axios"

let location = 33065;
let date = "2023-09-14";

export default function getAstro(req, res){
    let location = req.params.location
    axios.get(`http://api.weatherapi.com/v1/astronomy.json?key=${process.env.KEY}&q=${33065}&dt=${date}
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
