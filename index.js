
// Home functions

let homeCount= document.getElementById("home-count");
let guestCount= document.getElementById("guest-count");



function addOneHome(){
  homeCount.textContent= Number(homeCount.textContent) + 1;
}

function addTwoHome(){
  homeCount.textContent= Number(homeCount.textContent) + 2;
}

function addThreeHome(){
  homeCount.textContent= Number(homeCount.textContent) + 3;
}

// Guest functions

function addOneGuest(){
  guestCount.textContent= Number(guestCount.textContent) + 1;
}

function addTwoGuest(){
  guestCount.textContent= Number(guestCount.textContent) + 2;
}

function addThreeGuest(){
  guestCount.textContent= Number(guestCount.textContent) + 3;
}

function resetScores(){
  homeCount.textContent= 0;
  guestCount.textContent= 0;
}
