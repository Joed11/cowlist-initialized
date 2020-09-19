import $ from "jquery";

var postACow = (theCow, callback) => {
  $.ajax({
    url: 'http://127.0.0.1:8080/api/cows',
    type: 'POST',
    data: JSON.stringify(theCow),
    success: callback,
    error: () => { console.log('You failed to give the cows'); },
    contentType: 'application/json'
  });
};

export default postACow;