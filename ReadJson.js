var student=require('./source1');
var Read=function(){
};

Read.prototype.read= function() {
	// body...
	try{
			
			for (var i = 0; i <=student.students.length-1 ; i++) {
				//returning a json object to calling area.
				return student;
			}
		}
		
		catch(e){

			console.error("file not found");
			process.exit(e.code);

		}
};



module.exports=new Read();