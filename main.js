const output = document.querySelector(".changing-content");
const listItem = document.querySelectorAll(".list-item");

for (const item of listItem) {
  item.addEventListener("click", function() {
    fetch("text.json")
      .then(response => response.json())
      .then(text => {
        output.textContent = text[this.textContent];
      });
  });
}

const button = document.querySelector(".btn");
const entireList = document.querySelector("ul");

button.addEventListener("click", function() {
  if (entireList.style.display === "none") {
    entireList.style.display = "flex";
    button.textContent = "Sakrij";
    if (listItem.length > 0) {
      fetch("text.json")
        .then(response => response.json())
        .then(text => {
          output.textContent = text[listItems[0].textContent];
        });
    }
  } else {
    entireList.style.display = "none";
    button.textContent = "Prikaži";
    output.textContent = "";
  }
});

