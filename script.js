const phones = {
  "tecno spark 5 pro": {
    general: 195,
    redDot: 190,
    scope2x: 180,
    scope4x: 170,
    sniper: 100,
    freeLook: 75
  },
  "iphone 13": {
    general: 200,
    redDot: 195,
    scope2x: 185,
    scope4x: 175,
    sniper: 100,
    freeLook: 80
  }
};

document.querySelector("button").addEventListener("click", function () {
  const phone = document
    .getElementById("searchBox")
    .value
    .toLowerCase()
    .trim();

  const result = document.getElementById("result");

  if (phones[phone]) {
    const s = phones[phone];
    result.innerHTML = `
      <h2>Recommended Sensitivity</h2>
      <p>General: ${s.general}</p>
      <p>Red Dot: ${s.redDot}</p>
      <p>2× Scope: ${s.scope2x}</p>
      <p>4× Scope: ${s.scope4x}</p>
      <p>Sniper: ${s.sniper}</p>
      <p>Free Look: ${s.freeLook}</p>
    `;
  } else {
    result.innerHTML = "<p>❌ Phone not found. More devices will be added soon.</p>";
  }
});
const searchBox = document.getElementById("searchBox");
const suggestions = document.getElementById("suggestions");

searchBox.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if (value === "") return;

    Object.keys(phones).forEach(function(phone){

        if(phone.includes(value)){

            const item = document.createElement("div");

            item.className = "suggestion";

            item.textContent = phone;

            item.onclick = function(){

                searchBox.value = phone;

                suggestions.innerHTML = "";

            };

            suggestions.appendChild(item);

        }

    });

});
searchBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector("button").click();
    }
});
