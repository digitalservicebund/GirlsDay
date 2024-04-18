// initialisierungs script
window.onload = () => {
  const startButton = document.getElementById("startbutton");
  const spielfeld = document.getElementById("spielfeld");
  startButton.addEventListener("click", function () {
    startButton.classList.add("hide");
    spielfeld.classList.add("show");
    spielfeld.classList.remove("hide");
  });

  let zähler = 1;

  const alleButtons = document.getElementsByName("btn");
  alleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.id == zähler) {
        zähler++;
        button.classList.add("correct");
      } else {
        window.location.reload();
        alert("LOSER!");
      }
    });
  });
};
