var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		
var UnsortedXml=function (){
};

UnsortedXml.prototype.unsortedXml=function(student){
		
		var student=student;
		//converting json object into xml
		var conversion=xml.toXML( student.students,{header: false, indent: '  '});

		try{
			fs.writeFile('UnsortedXml.xml','Conversion from json onject to xml'+"\n"+conversion,function (err) {
	     
	     			if (err) throw err;
	     			console.log('Its saved! in same location.');
   	 			});
			}
		catch(e){
				
			console.log("Error"+e);
			}
};
//exporting our own class object.
module.exports=new UnsortedXml();
