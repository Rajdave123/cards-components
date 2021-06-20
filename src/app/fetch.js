
function getData() {

    fetch("https://threatlabip2.forenzy.net/threatinfo.php").then(resp => res.json()).then(data => console.log(data)).catch(console.log(1212))

}


getData();
