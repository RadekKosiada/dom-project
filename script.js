var body = document.body;
console.log(body);

var mainContent = document.createElement("div");
mainContent.setAttribute("class", "main-content");
body.appendChild(mainContent);

mainContent.innerText= "Dominik";
stringLength = mainContent.innerText.length;

var slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.setAttribute("min", 0);
slider.setAttribute("max", stringLength);
slider.setAttribute("step", 1);
slider.setAttribute("list", "tickmarks")
mainContent.appendChild(slider);

var datalist =document.createElement("datalist");
datalist.setAttribute("id", "tickmarks")
slider.appendChild(datalist);

for(var i = 0; i < stringLength; i ++) {
  var options = document.createElement("option");
  datalist.appendChild(options);
  options.setAttribute("id", i);
  options.setAttribute("value", i);
  options.innerText = i;
}





