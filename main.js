const output = document.querySelector(".changing-content");
const listItem = document.querySelectorAll(".list-item");
const button = document.querySelector(".btn");
const entireList = document.querySelector("ul");

button.addEventListener("click", function () {
  if (entireList.style.display === "none") {
    entireList.style.display = "flex";
    button.textContent = "Sakrij";

    for (const item of listItem) {
      item.addEventListener("click", function () {
        fetch("text.json")
          .then((response) => response.json())
          .then((text) => {
            output.textContent = text[this.textContent];
          });
      });
    }
  } else {
    entireList.style.display = "none";
    button.textContent = "Prikaži";
    output.textContent = "";
  }
});
