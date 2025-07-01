const searchQueryStr = window.location.search;
console.log("seachQuary", searchQueryStr);
const res = searchQueryStr.split("=");
console.log(res);
const videoId = res[1];
console.log(videoId);

const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
