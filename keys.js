console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var spotifyKeys = {
  id: "5f027c20f59b4045b43efba0d3c118ea",
  secret: "bb60f0c0a52944498a897314e58e1ba4"
}