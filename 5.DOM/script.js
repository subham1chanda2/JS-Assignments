let ansOne = document.getElementById("text")
ansOne.innerText="new hello"

let ansTwo = document.getElementsByTagName("h1")
ansTwo[0].innerText="this is new h1 tag"

let ansThree = document.getElementsByClassName("box")
ansThree[0].innerText="this is new box"

ansTwo[1].innerText="Hello World"

function changeDirection(){
  let cards = document.getElementsByClassName("cards")[0]
  cards.style.flexDirection="column"
  cards.style.alignItems="center"
  cards.style.justifyContent="space-between"
}

let heading = document.getElementsByTagName("h1")[1]
heading.style.color="red"
heading.setAttribute("id","heading")

function changeText(){
  let heading = document.getElementsByTagName("h1")[1]
  heading.innerText = "Welcome to Elevation academy"
}

function clock(){
  let hours = document.getElementById("hh");
  let minutes = document.getElementById("mm");
  let seconds = document.getElementById("ss");

  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();

  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
}
setInterval(clock, 1000);

function yearChange() {
  let selectedYear = document.getElementById("yearSelect").value;
  document.getElementById("year").innerText = selectedYear;
}

function emailCheck() {
  let a = document.getElementById("email").value;
  if (!a.endsWith("prepbytes.com")) {
      let b = document.getElementById("emailcheck");
      b.style.display = "inline";
  } else {
      let b = document.getElementById("emailcheck");
      b.style.display = "none";
  }
}

function numberCheck() {
  let a = document.getElementById("phoneno").value;
  if (!a.startsWith("91")) {
      let b = document.getElementById("startcheck");
      b.style.display = "inline";

  } else {
      let b = document.getElementById("startcheck");
      b.style.display = "none";
  }
  if (a.length == 10) {
      let b = document.getElementById("digitcheck");
      b.style.display = "inline";
  } else {
      let b = document.getElementById("digitcheck");
      b.style.display = "none";
  }
}

function bYearCheck() {
  let a = document.getElementById("byear").value;
  if (a < 1995) {
      let b = document.getElementById("byearcheck");
      b.style.display = "inline";
  } else {
      let b = document.getElementById("byearcheck");
      b.style.display = "none";
  }
}