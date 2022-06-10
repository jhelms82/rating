const form = document.getElementById("form");

//Form Submit event listener, making form display to add thank you box
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // const rating = document.querySelector('input[name="rating"]:checked').value;
  document.querySelector(".box").style.display = "none";
  document.querySelector(".box-2").style.display = "block";
});

//Function for onsubmit to display results from rating
function displayRadioValue() {
  var ele = document.getElementsByName("rating");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      document.getElementById("rate").innerHTML = " " + ele[i].value;
  }
}
