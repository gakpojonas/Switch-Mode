////////////////////////
/////////////////////////
////////////////////////
///////////////////////

const btnInfo = document.querySelector(".btn-info");
const btnDark = document.querySelector(".btn-dark");
const container = document.querySelector(".container");
const card = document.getElementsByClassName("card");

const switchBackgroundColor = function () {
  btnDark.addEventListener("click", function () {
    document.body.style.backgroundColor = "#222222";

    for (var i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "#5bc0de";
    }
  });

  btnInfo.addEventListener("click", function () {
    document.body.style.backgroundColor = "#5bc0de";
    for (var i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "#222222";
    }
  });
};

switchBackgroundColor();
