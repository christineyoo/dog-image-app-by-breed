'use strict';

function getDogImage() {
const breed = $("option").val();
console.log(breed);
    fetch(`https://dog.ceo/breeds/${breed}/images/random`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $(".results").append(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $(".results").removeClass('hidden');
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});