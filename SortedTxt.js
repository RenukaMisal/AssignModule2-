//getting students json object

var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		

var SortedTxt=function(){
};

SortedTxt.prototype.sortTxt=function(student){
		try{
			var student=student;
			
			function sortById(x,y)
			{
				return x.id-y.id;
			}
			
			fs.appendFile('Sorted.txt',"\n"+"after sorting"+"\n");
 			student.students.sort(sortById);
			fs.writeFile('Sorted.txt',"First Name | Last Name | Score"+"\n");

			for (var i = 0; i <=student.students.length-1 ; i++) {
				
				var data=(student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score)+"\n";		//logic for witing into file in the same formate
				fs.appendFile('stud.txt', data, function (err) {
	     
	     			if (err) throw err;
	     		});
			};
		}
		
		catch(e){

			console.error("file not found");
			process.exit(e.code);
		}
};
module.exports=new SortedTxt();
