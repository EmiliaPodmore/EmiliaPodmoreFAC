function signIn() {
  let name = prompt("What is your name?") || "";
  let emoji = prompt("Type your favourite emoji") || "";
  let heading = document.querySelector("h3");

  alert("Thank you " + (name || "Guest") + "!");
  heading.innerHTML = `Welcome ${name || ""}, to my FAC Application ${
    emoji || ""
  }`;
}

let contactButton = document.querySelector("#sign");
contactButton.addEventListener("click", signIn);
