console.log("doing it");
url = location.href;
console.log(url);
console.log(url.match("="));
if(url.match("=")){
    var index = url.indexOf("640");
    url = url.slice(0,index + 3);
    location.href = url;
}