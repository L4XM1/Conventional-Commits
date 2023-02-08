const output = document.querySelector(".changing-content");
const list = document.querySelectorAll("li");

for (const item of list) {
  item.addEventListener("click", function() {
    fetch("text.json")
      .then(response => response.json())
      .then(text => {
        output.textContent = text[this.textContent];
      });
  });
}