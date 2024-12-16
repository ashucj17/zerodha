let banner = document.createElement("div");
banner.setAttribute("id", "banner");
console.log(banner);
let elementDiv = document.querySelector("body");
elementDiv.appendChild(banner);

let heading = document.querySelector("h1");
heading.innerHTML = "Heading yet not finalized";
console.log(heading);
let parentDiv = heading.parentElement;
parentDiv.appendChild(heading);
