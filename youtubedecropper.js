console.log("doing it");
url = location.href;
console.log(url);
console.log(url.match("="));
if(url.match("=")){
	url = url.split('').reverse().join('');
	console.log(url);
	var equalscounter = 0;
	var i = 0;
	for (i; i < url.length - 1; i++){
		console.log(url[i]);
		console.log(i);
		if(url[i] == "="){
			equalscounter++;  
		}
		if(equalscounter >= 2){
			break;
		}
	}
	i++;
	url = url.split('').reverse().join('');
	url = url.slice(0, -i);
	location.href = url;
}

