let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = this.innerText;

    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else if (value === "C") {
      display.value = "";
    } 
    else {
      display.value += value;
    }
  });
});