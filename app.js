const geocode = require("./utils/geocode")

const forecast = require("./utils/forecast")

const address = process.argv [2];

if(!address) {
    console.log("Please provide an address.")
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if(error) {
             return console.log(error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log("Error", location);
            console.log("Data", forecastData);
        })
    });
}
 
// request({ url: weatherUrl, json: true }, (error, response) => {
//     if(error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log("Unable to find location!");
//     } else {
//         console.log(response.body.currently);
//     }
//     // console.log(response.body.currently);
// });

