# Crypto Tracker

## What it does
Our crypto tracker is a GUI for visualizing the history of cryptocurrencies over certain periods of time (currently only supports Bitcoin).

## Why is it important?
It is a great interactive piece of software that will be outward facing allowing people who visit our site to see something they're familiar with.  It will be a great connector for tying together cryptocurrencies and blockchain on the SBS site.


### How to run
1. terminal command to start up the server and connect to database: 
`npm run dev`
2. Open `localhost:8000` in any browser to view the chart

#### API Endpoints
The endpoints can be accessed by running __Postman__ while the server is running.
You can create POST/GET requests in __Postman__ with the url:

`localhost8000:<desired endpoint>`

Be sure to fill your desired enpoint in with an endpoint located in the `app.js` file.

For example one valid API ping would be a POST request:
`localhost:8000/bitcoin-history`





#### Supplemental Sources
* https://www.youtube.com/watch?v=sE08f4iuOhA
* https://vegibit.com/render-html-in-node-js/
* https://www.chartjs.org/docs/latest/axes/labelling.html