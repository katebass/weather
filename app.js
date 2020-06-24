const request = require('postman-request');

// require units - farenheit (units=f)
//const url = 'http://api.weatherstack.com/current?access_key=a562a443bf4ded84a9e9239e1fd6e3b8&query=48.148598,17.107748&units=f';

const url = 'http://api.weatherstack.com/current?access_key=a562a443bf4ded84a9e9239e1fd6e3b8&query=48.148598,17.107748';

request({url: url, json: true}, (error, responce) => {
    //console.log(responce.body.current);
    const currentData = responce.body.current;
    console.log('Welcome to the weather app! Here an actual weather in Bratislava provided:');
    console.log('It\'s currently ' + currentData.temperature + ' degrees out.');
    console.log('It feels like ' + currentData.feelslike + ' degrees out.');
    console.log('Description: ' + currentData.weather_descriptions[0]
                + '.\nWind sppeed: ' + currentData.wind_speed
                + '.\nWind direction: ' + currentData.wind_dir + '.');

});


// variant without providing json request (json: false)
// request({url: url}, (error, responce) => {
//     const data = JSON.parse(responce.body);
//     console.log(data.current);
// });