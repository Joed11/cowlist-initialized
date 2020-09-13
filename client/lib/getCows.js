import $ from "jquery";

var getAllCows = (callback) => {
  $.ajax({
    url: 'http://127.0.0.1:8080/api/cows',
    type: 'GET',
    success: callback,
    error: () => { console.log('You failed to get the cows'); },
    contentType: 'application/json'
  });
};

export default getAllCows;