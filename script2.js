var text = " Lorem ipsum dolor sit amet";
var length = text.length;
//console.log("duljina teksta = " + length);

var wordSit = text.substr(19, 3); // Ili neka druga metoda je ok


text.replace("amet", "elit"); //Ili regex, ako netko bas zna

var newText = text + ", consectetur adipiscing elit";

text = text.toUpperCase();

text = text.trim();
console.log(text);

