const alertClicked = () => {
  alert("alertがclickされたよ");
};
document.querySelector("#alert").addEventListener("click", alertClicked);

const goTopClicked = () => {
  window.location.href = "top.html";
};
document.querySelector("#go-top").addEventListener("click", goTopClicked);
