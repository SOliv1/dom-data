var xhr = new XMLHttpRequest();

var data;


xhr.open("GET", "https://swapi.co/api/");

xhr.send();



function setData(jsonData) {

    data = jsonData;

}

xhr.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        console.log(typeof(JSON.parse(this.responseText)));

    };

}



