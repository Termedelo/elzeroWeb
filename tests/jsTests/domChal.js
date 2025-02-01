//! start of header
let headerDiv = document.createElement("header");
headerDiv.style.display = "flex";
headerDiv.style.flexDirection = "row";
headerDiv.style.justifyContent = "space-between";
let ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.flexDirection = "row";
ul.style.width = "400px";
ul.style.justifyContent = "space-evenly";
let logo = document.createElement("div");
logo.innerHTML = "Elzero";
logo.style.color = "green";
logo.style.fontSize = "30px";
logo.style.fontWeight = "bold";
logo.style.paddingLeft = "50px";
let innerLinksArr = ["Home", "Service", "About", "contact"];
for (let i = 0; i < innerLinksArr.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", "#");
  a.style.textDecoration = "none";
  a.innerHTML = innerLinksArr[i];
  a.style.color = "green";
  a.style.fontSize = "20px";
  li.appendChild(a);
  ul.appendChild(li);
}
headerDiv.appendChild(logo);
headerDiv.appendChild(ul);
document.body.appendChild(headerDiv);
//! end of header
//# ---------------------------------------------------------------------------------------------
//! start of the mainBody
let mainBodyDiv = document.createElement("div");
mainBodyDiv.style.height = "700px";
mainBodyDiv.style.backgroundColor = "#EEE";
mainBodyDiv.style.display = "grid";
mainBodyDiv.style.gridTemplateColumns =
  "repeat(auto-fill , minmax(400px , 1fr))";
mainBodyDiv.style.columnGap = "30px";
mainBodyDiv.style.rowGap = "30px";
let text = document.createElement("p");
text.innerHTML = "product";
text.style.color = "black";
text.style.fontSize = "28px";
text.style.marginTop = "0px";
for (let i = 1; i <= 15; i++) {
  let card = document.createElement("div");
  let he = document.createElement("h1");
  he.innerHTML = `${i}`;
  he.style.color = "black";
  he.style.marginBottom = "0px";
  card.style.height = "100px";
  card.style.backgroundColor = "#aaa";
  card.style.borderRadius = "15px";
  card.style.textAlign = "center";
  card.appendChild(he);
  card.appendChild(text.cloneNode(true));
  mainBodyDiv.appendChild(card);
}
document.body.appendChild(mainBodyDiv);
//! end of the mainBody

//! start of the footer
let footer = document.createElement("footer");
footer.style.backgroundColor = "#156642";
footer.style.width = "100%";
footer.style.height = "50px";
footer.innerHTML = `@CopyRight 2024`;
footer.style.textAlign = "center";
footer.style.color = "white";
footer.style.fontSize = "30px";
footer.style.paddingTop = "20px";
document.body.appendChild(footer);
//! end of the footer
