const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
const port = proccess.env.PORT || 8080;

app.use(express.static('public'));
app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {

    request(`http://api.weatherapi.com/v1/current.json?key=aabd1021ee3d4a64b2835912221207&q=shevgaon&aqi=no`, function(error, response, body) {
        data = JSON.parse(body);
        res.render("index", {
            data: data
        });
        console.log(data);
    });
});
app.post('/', urlencodedParser, (req, res) => {
    let city = req.body.cityname;
    request(`http://api.weatherapi.com/v1/current.json?key=aabd1021ee3d4a64b2835912221207&q=${city}&aqi=no`, function(error, response, body) {
        data = JSON.parse(body);
        res.render("index", {
            data: data
        });
        console.log(data);
    });

});

app.get('/second', (req, res) => {
    res.render("second", {
        data: data
    });
    console.log(data);
});
app.listen(port, () => {
    console.log("app is running on 8080");
});