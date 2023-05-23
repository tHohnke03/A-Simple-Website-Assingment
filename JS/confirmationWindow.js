function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Your username is: ${myName}`;
  }
}
myButton.onclick = () => {
  setUserName();
};




let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");