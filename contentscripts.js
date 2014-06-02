
//Getting the Info for the seaches on the 
$(document).ready(function() {

	var serviceUrl = 'http://localhost:8080/api/searchs'

	var SearchFor = $('#HEADING').text();
	var site = document.domain;
	var date = Date.now();

	var user = 1;
	
	var ObjSend = Array();		

	//We build an object to send to the service. 
	ObjSend = {
		"user" : "rauljuarez@gmail.com",
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
                console.log("Service Status: "+msg);
           },
           error: function(jxhr){
               alert(jxhr.responseText);
                //do some thing
           }
         });

});