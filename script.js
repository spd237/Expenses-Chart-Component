const barsContainer = document.querySelectorAll(".spending__chart-bars");

fetch("./data.json")
  .then((data) => data.json())
  .then((data) => {
    generateBars(data);
  })
  .catch((error) => console.log(error));

function generateBars(data) {
  barsContainer.forEach((container, i) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="spending__chart-bars-bar" data-amount="${
        data[i].amount
      }" style = "height: ${data[i].amount * 2}px;"></div>`
    );
  });
}
