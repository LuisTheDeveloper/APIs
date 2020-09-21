var request = new XMLHttpRequest();

const usingHTTPRequest = () => {
  request.open("GET", "https://hplussport.com/api/products");

  request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(resopnse);
    console.log(parsedData);
  };

  request.send;
};
