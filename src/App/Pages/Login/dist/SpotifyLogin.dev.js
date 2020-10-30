"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokenFromResponse = exports.accessUrl = exports.authEndpoint = void 0;
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
var clientId = '35f4707beb6d45ff90b6e5105a9d1528';
var authEndpoint = "https://accounts.spotify.com/authorize";
exports.authEndpoint = authEndpoint;
var redirectUri = "http://localhost:3000/";
var scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];
var accessUrl = "".concat(authEndpoint, "?client_id=").concat(clientId, "&redirect_uri=").concat(redirectUri, "&scope=").concat(scopes.join("%20"), "&response_type=token&show_dialog=true");
exports.accessUrl = accessUrl;

var getTokenFromResponse = function getTokenFromResponse() {
  return window.location.hash.substring(1).split("&").reduce(function (initial, item) {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
};

exports.getTokenFromResponse = getTokenFromResponse;