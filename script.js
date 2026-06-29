let phones = {};

const searchBox = document.getElementById("searchBox");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");

// Load phone database
fetch("phones.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(phone => {
      phones[phone.model.toLowerCase()] = phone;
    });
  });

function searchPhone() {

  const phoneName = searchBox.value.toLowerCase().trim();

  loading.style.display = "block";
  result.innerHTML = "";

  setTimeout(() => {

    loading.style.display = "none";

    if (!phones[phoneName]) {
      result.innerHTML = "<h2>❌ Phone not found</h2>";
      return;
    }

    const p = phones[phoneName];

    result.innerHTML = `
      <h2>📱 ${p.model}</h2>

      <p><strong>Brand:</strong> ${p.brand}</p>
      <p><strong>RAM:</strong> ${p.ram} GB</p>
      <p><strong>Processor:</strong> ${p.processor}</p>
      <p><strong>Refresh Rate:</strong> ${p.refreshRate}Hz</p>

      <hr><br>

      <p>✅ Automatic sensitivity calculation coming next...</p>
    `;

  },500);

}

searchBtn.onclick = searchPhone;

searchBox.addEventListener("keyup",function(e){

    if(e.key==="Enter"){
        searchPhone();
    }

    suggestions.innerHTML="";

    const value=this.value.toLowerCase();

    if(value==="") return;

    Object.keys(phones).forEach(function(name){

        if(name.includes(value)){

            const div=document.createElement("div");

            div.className="suggestion";

            div.innerText=phones[name].model;

            div.onclick=function(){

                searchBox.value=phones[name].model;

                suggestions.innerHTML="";

                searchPhone();

            };

            suggestions.appendChild(div);

        }

    });

});
