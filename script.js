function highlight() {
  // Get all bold elements
  const boldElements = document.querySelectorAll("strong");

  // Change color of bold elements to green
  boldElements.forEach(bold => {
    bold.style.color = "green";
  });
}

function return_normal() {
  // Get all bold elements
  const boldElements = document.querySelectorAll("strong");

  // Revert color of bold elements to black
  boldElements.forEach(bold => {
    bold.style.color = "black";
  });
}