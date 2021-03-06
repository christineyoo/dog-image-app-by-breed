"use strict";

function getDogImage() {
  const selectedBreed = $("#mybreed").val().toLowerCase();
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((responseJson) => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $(".results").append(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();

    // removes the current image
    $(".results-img").detach();
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
