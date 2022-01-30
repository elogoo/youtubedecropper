console.log("doing it now");
url = location.href;
console.log(url);
console.log(url.match(/[a-z]\d\d\d/));
stringmatch = url.match(/[a-z]\d\d\d/);
if(url.match("crop")){
    console.log("doing it for real");
    var index = url.indexOf(stringmatch);
    url = url.slice(0,index + 4);
    location.href = url;
}