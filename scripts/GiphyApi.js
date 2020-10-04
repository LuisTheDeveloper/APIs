var request = new XMLHttpRequest();

const API_KEY = "YOURAPIKEYHERE";

request.open("GET", `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
  var originalUrl = parsedData.data.images.original.url;
  console.log(originalUrl);

  const gif = document.createElement("img");
  gif.setAttribute("src", originalUrl);
  document.body.appendChild(gif);
};

request.onerror = function () {
  console.log("Something went wrong!");
};

request.send();
