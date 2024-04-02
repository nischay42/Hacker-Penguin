let first = document.getElementById("first");
let second = document.getElementById("second");
let count = 0;

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("btn").click();
  }
});

let a = [
  "Connecting to server 1...",
  "Connection failed. Retrying...",
  "Connecting to server 2",
  "Connected Successfully...",
  "Connecting to Facebook...",
  "Connecting to Instagram...",
  "Trying Brute Force...",
  "200K passwords tried...",
  "Match not found",
  "Another 200K passwords tried...",
  "Match not found...",
  "Another 200K passwords tried...",
  "Match found...",
  "Accessing Account...",
  "Hack Successful...",
];

function initialize() {
  const input = document.getElementById("input").value.trim();
  if (input.length === 0) {
    console.log("Pleas fill the fild");
  } else if (count >= 1) {
    first.innerHTML = " ";
    second.innerHTML = " ";
    const elementToHide = document.querySelector(".image-1");
    const element = document.querySelector(".image-2");

    elementToHide.classList.remove("hide");
    element.classList.remove("show");
    panguin();
  } else {
    panguin();
  }
}

async function panguin() {
  const userNameInput = document.getElementById("input");
  const userName = userNameInput.value;
  const elementToHide = document.querySelector(".image-1");
  const elementToShow = document.querySelector(".video");
  const btn = document.querySelector("#btn");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  first.innerHTML = `Target ${userName}`;
  btn.classList.add("hide");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  elementToHide.classList.add("hide");
  elementToShow.classList.add("show");

  for (let i = 0; i < a.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    second.innerHTML += a[i] + "<br>";
  }

  count++;
  done();
}

function done() {
  const elementToShow = document.querySelector(".video");
  const element = document.querySelector(".image-2");

  elementToShow.classList.remove("show");
  element.classList.add("show");
  btn.classList.remove("hide");
}