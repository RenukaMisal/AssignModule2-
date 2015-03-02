var abc=require('./ReadJson.js');
var ReadSort=require('./SortedTxt.js');
var ReadXml=require('./SortedXml.js');
var ReadUnsorted=require('./UnsortedTxt.js');
var ReadUnsortedXml=require('./UnsortedXml.js');

var json=abc.read();
ReadUnsorted.unsortedTxt(json);
ReadUnsortedXml.unsortedXml(json);
ReadSort.sortTxt(json);
ReadXml.sortedXml(json);

console.log("Successfull");

