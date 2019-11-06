console.log(window)

console.log(window.innerHeight)
console.log(window.innerWidth)

console.log(innerWidth);
console.log(outerWidth);

console.log(window.location);

// window.location = "https://google.com";

console.log(window.document);

localStorage.setItem("loggedin", true);

sessionStorage.setItem("SessionID", 1000);
console.log(sessionStorage.getItem("SessionID"))

// location.reload();

console.log(window.document.title);

console.log(window.document.body);

console.log(window.document.body.children)
// window.document.body.children[2] = "Hello everyone!!!"
console.log(window.document.body.children[2].textContent)

window.document.body.children[2].textContent = "Hello everyone!!!"
window.document.body.children[2].style.backgroundColor = "red";

console.log(window.document.body.children[3].children[2].children[0])

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

window.document.body.children[3].lastElementChild.style.backgroundColor = "green";

console.log(window.document.body.children[2].parentElement);


console.log(document.getElementsByTagName("li"))

console.log(document.getElementsByClassName("active"))

console.log(document.getElementById("title"))

console.log(document.querySelector(".active"))
console.log(document.querySelectorAll("ul li.active"))


var p = document.createElement("p");
p.textContent = "New Paragraph";
p.style.fontSize = "17px";

var li = document.querySelector("li");
li.appendChild(p);

var list = document.querySelectorAll("li")[3];
li.remove();


alert("this is alert");
console.log(confirm("are you sure"));
console.log(promt("Your name?"));