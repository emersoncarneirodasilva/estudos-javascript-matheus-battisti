console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1")[0].innerText);

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("p")[0].innerText);
console.log(document.getElementsByTagName("p")[1].innerText);

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByTagName("li")[0].innerText);
console.log(document.getElementsByTagName("li")[1].innerText);
console.log(document.getElementsByTagName("li")[2].innerText);

console.log(document.getElementsByTagName("footer"));
console.log(document.getElementsByTagName("footer")[0]);
console.log(document.getElementsByTagName("footer")[0].childNodes);
console.log(
  document.getElementsByTagName("footer")[0].childNodes[0].nextSibling.innerText
);
console.log(document.getElementsByTagName("footer")[0].children);
console.log(document.getElementsByTagName("footer")[0].children[0]);
console.log(document.getElementsByTagName("footer")[0].children[1]);
console.log(document.getElementsByTagName("footer")[0].children[0].innerText);
console.log(document.getElementsByTagName("footer")[0].children[1].innerText);
