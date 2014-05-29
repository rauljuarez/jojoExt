
//Getting the Info for the seaches on the 
$(document).ready(function() {

	var serviceUrl = 'http://localhost:8080/'

	var SearchFor = $('#HEADING').text();
	var site = document.domain;
	var date = Date.now();

	var user = 1;
	
	var ObjSend = Array();		

	//We build an object to send to the service. 
	ObjSend = {
		"user" : user,
		"dateCreated" : date,
		"site" : site,
		"searchTerm" : SearchFor 
	};

	//log
    console.log(ObjSend);

    //send
	$.ajax({
            type: "POST", //or GET
            url: serviceUrl,
            data: ObjSend,
            crossDomain:true,
            cache:false,
            async:false,
            success: function(msg){
                //do some thing
                alert("we can Post to the service");
           },
           error: function(jxhr){
               alert(jxhr.responseText);
                //do some thing
           }
         });

});