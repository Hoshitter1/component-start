const btnClicked = () => {
  window.location.href = "page1.html";
};
document.querySelector(".btn").addEventListener("click", btnClicked);

const alertClicked = () => {
  alert("alertがclickされたよ");
};
document.querySelector("#alert").addEventListener("click", alertClicked);
