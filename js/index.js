$(document).ready(function() {// creating the map for the manga
var m = new Map();
m.set('http://www.mangahere.co/manga/tower_of_god/', ["Tower of God", "250", "222"]);
//Creating a list for the currently being read mangas
$("#catch-up").onclick = function() {
for (var [key, value] of m)
  if (!(value[1]===value[2])) {
    window.open(key);
  }

};

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
  
  //populating the table itself
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
// // Get the modal
var modal = document.getElementById('myModal');


// // Get the button that opens the modal
var btn = document.getElementById("add");

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
    $("#submit_btn").click(function() {
      // validate and process form here
      
      var manga = $("#manga").val();
      if (manga == "") {
        $("#manga_error").show();
        $("#manga").focus();
        return false;
      }
      var chapter = $("#chapter").val();
      if (chapter == "") {
        $("#chapter_error").show();
        $("#chapter").focus();
        return false;
      }
      m.set(manga, ['lol','lol', chapter])
    });
console.log($("#mangaTable"));
$("#mangaTable").append(tableCreate(m));
});
//create the table

// var provider = new firebase.auth.GoogleAuthProvider();