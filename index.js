"use strict";

const dogBreeds = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "australian-shepherd",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "buhund-norwegian",
  "bulldog-boston",
  "bulldog-english",
  "bulldog-french",
  "bullterrier-staffordshire",
  "cairn",
  "cattledog-australian",
  "chihuahua",
  "chow",
  "clumber",
  "cockapoo",
  "collie-border",
  "coonhound",
  "corgi-cardigan",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "dane-great",
  "deerhound-scottish",
  "dhole",
  "dingo",
  "doberman",
  "elkhound-norwegian",
  "entlebucher",
  "eskimo",
  "finnish-lapphund",
  "frise-bichon",
  "germanshepherd",
  "greyhound-italian",
  "groenendael",
  "havanese",
  "hound-afghan",
  "hound-basset",
  "hound-blood",
  "hound-english",
  "hound-ibizan",
  "hound-plott",
  "hound-walker",
  "husky",
  "keeshond",
  "kelpie",
  "komondor",
  "kuvasz",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "mastiff-bull",
  "mastiff-english",
  "mastiff-tibetan",
  "mexicanhairless",
  "mix",
  "mountain-bernese",
  "mountain-swiss",
  "newfoundland",
  "otterhound",
  "ovcharka-caucasian",
  "papillon",
  "pekinese",
  "pembroke",
  "pinscher-miniature",
  "pitbull",
  "pointer-german",
  "pointer-germanlonghair",
  "pomeranian",
  "poodle-miniature",
  "poodle-standard",
  "poodle-toy",
  "pug",
  "puggle",
  "pyrenees",
  "redbone",
  "retriever-chesapeake",
  "retriever-curly",
  "retriever-flatcoated",
  "retriever-golden",
  "ridgeback-rhodesian",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "schnauzer-giant",
  "schnauzer-miniature",
  "setter-english",
  "setter-gordon",
  "setter-irish",
  "sheepdog-english",
  "sheepdog-shetland",
  "shiba",
  "shihtzu",
  "spaniel-blenheim",
  "spaniel-brittany",
  "spaniel-cocker",
  "spaniel-irish",
  "spaniel-japanese",
  "spaniel-sussex",
  "spaniel-welsh",
  "springer-english",
  "stbernard",
  "terrier-american",
  "terrier-australian",
  "terrier-bedlington",
  "terrier-border",
  "terrier-dandie",
  "terrier-fox",
  "terrier-irish",
  "terrier-kerryblue",
  "terrier-lakeland",
  "terrier-norfolk",
  "terrier-norwich",
  "terrier-patterdale",
  "terrier-russell",
  "terrier-scottish",
  "terrier-sealyham",
  "terrier-silky",
  "terrier-tibetan",
  "terrier-toy",
  "terrier-westhighland",
  "terrier-wheaten",
  "terrier-yorkshire",
  "vizsla",
  "waterdog-spanish",
  "weimaraner",
  "whippet",
  "wolfhound-irish",
];

function mapOptions() {
  return dogBreeds
    .map((breed) => `<option value="${breed}">${breed}</option>`)
    .join("");
}

function fillOptions() {
  $("#mybreed").append(mapOptions());
}

function getDogImage() {
  const selectedBreed = $("#mybreed option:selected").val();
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
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
  fillOptions();
});
