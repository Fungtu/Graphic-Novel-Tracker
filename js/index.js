// creating the map for the manga
var m = new Map();
m.set('http://www.mangahere.co/manga/tower_of_god/', ["Tower of God", "250", "222"]);
// Creating a list for the currently being read mangas
document.getElementById("myBtn").addEventListener("click", function() {
for (var [key, value] of m)
  if (!(value[1]===value[2])) {
    window.open(key);
  }

});

function tableCreate(Map) {
  // creation of the table
  var table = document.createElement("table");
  // Creating the table header
  var tableHead = document.createElement("tr");
  var name = document.createElement("th");
  name.appendChild(document.createTextNode("Name"));
  tableHead.appendChild(name);
  var cChp = document.createElement("th");
  cChp.appendChild(document.createTextNode("Current Chapter"));
  tableHead.appendChild(cChp);
  var lChp = document.createElement("th");
  lChp.appendChild(document.createTextNode("Last chapter read"));
  tableHead.appendChild(lChp);
  table.appendChild(tableHead);
  //populating the table itself;
  for (var value of Map.values()) {
    //scrape the html of the key and put it into an array of size 3
    var mangaEntry = document.createElement("tr");
    var mangaName = document.createElement("td");
    mangaName.appendChild(document.createTextNode(value[0]));
    mangaEntry.appendChild(mangaName);
    var mangaChp = document.createElement('td');
    mangaChp.appendChild(document.createTextNode(value[1]));
    mangaEntry.appendChild(mangaChp);
    var readerChp = document.createElement('td');
    readerChp.appendChild(document.createTextNode(value[2]));
    mangaEntry.appendChild(readerChp);
    table.appendChild(mangaEntry);
  }

  return table;
}

// Add the contents of options[0] to #foo:
document.getElementById("mangaTable").appendChild(tableCreate(m));

var provider = new firebase.auth.GoogleAuthProvider();