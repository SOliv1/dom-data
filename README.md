# links
introduction to links browser



# What is it?
JavaScript Object Notation (JSON)
 
What does it do?
Allows us to structure and share data across the web
 
How do you use it?
JSON can be read from an API and manipulated using any programming language

-------------------------------------------------------------------------------------//

# Make a call to the root of the API
curl https://ci-swapi.herokuapp.com/api/

# Make a call to get all of the people from the API
curl https://ci-swapi.herokuapp.com/api/people/

# Make a call to get the person who as an ID of 1
curl https://ci-swapi.herokuapp.com/api/people/1/

# Make a call to get the person who has an ID of 1, and format it using
# the Python JSON tool
curl https://ci-swapi.herokuapp.com/api/people/1/ | python3 -m json.tool


var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.se
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
    };
}

console.log(data);

--------------------------------------------------------------//

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    };
}

console.log(data);
© 2020 GitHub, Inc.

================================================================//













