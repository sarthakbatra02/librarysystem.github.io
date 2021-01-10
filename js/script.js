/*External Javascript File*/
//Calling function
function formValidation()
    {
        event.preventDefault();
        // Storing values
		let result=1;
        let fname = document.forms["formmm"]["fname"].value;
        let lname = document.forms["formmm"]["lname"].value;
        let emailid = document.forms["formmm"]["emailid"].value;
        let phnum = document.forms["formmm"]["phnum"].value;
        let address = document.forms["formmm"]["addr"].value;
        let courses = document.forms["formmm"]["courses"].value;
        let time = document.forms["formmm"]["time"].value;
        let subdate = document.forms["formmm"]["subdate"].value;
        let sub = document.getElementsByClassName("sub");
        // First Name
        if(fname == "")
            {
                document.getElementById("ferror").innerHTML = "**Required**";
                 result=0;				
            }
        else if(!isNaN(fname))
            {
                document.getElementById("ferror").innerHTML = "It must contain letters";
				 result=0;
            }
        else if(fname.length >=3 && fname.length <=10)
            {
               
                document.getElementById("ferror").innerHTML = "";
            }
        else    
            {
                document.getElementById("ferror").innerHTML = "Minimum 3 and Maximum 10 words";
				 result=0;
            }
        // End of First Name 
		//Last Name
        if(lname == "")
            {
                document.getElementById("lerror").innerHTML = "**Required**"; 
                 result=0;			
            }
        else if(!isNaN(lname))
            {
                document.getElementById("lerror").innerHTML = "It must contain letters";
                result=0;				
            }
        else if(lname.length >=3 && lname.length <=10)
            {
               
                document.getElementById("lerror").innerHTML = "";
            }
        else    
            {
                document.getElementById("lerror").innerHTML = "Minimum 3 and maximun 10 words";
				result=0;
            }
		//End of Last Name	
        // emailregex
        const emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailid == "")
            {
                document.getElementById("mailerror").innerHTML = "*Required";
				result=0;
          
            }
        else if(!emailregex.test(emailid))
            {
                document.getElementById("mailerror").innerHTML = "Enter Valid Email";
				result=0;
            }
        else    
            {
                document.getElementById("mailerror").innerHTML = "";
            }
        //phoneregex
        const phoneregex = /^[7-9]{1}[0-9]{4}-[0-9]{5}/;
        if(phnum == "")
            {
                document.getElementById("numerror").innerHTML = "**Required**";
                result=0;
            }
        else if(!phoneregex.test(phnum))
            {
                document.getElementById("numerror").innerHTML = "Enter Valid Phone Number";
                result=0;
            }
        else    
            {
               
                document.getElementById("numerror").innerHTML = "";
            }
        // address
        if(address == "")
            {
                document.getElementById("adderror").innerHTML = "*Required";
				result=0;
            }
        else if(address.length >= 5 && address.length <= 500)
            {
                
                document.getElementById("adderror").innerHTML = "";
            }
        else
            {
                document.getElementById("adderror").innerHTML = "Enter minimum 5 and Maximum 500 letters";
				result=0;
            }
       
        // checkboxes...subjects
        var selectedItem=[],j=0;
        for(var i=0;i < sub.length;i++)
        {
            if(sub[i].checked == true)
                {
                   selectedItem[j] = sub[i].value
                    j++;
                }
        }   
        if(selectedItem.length < 2)
            {
                document.getElementById("suberror").innerHTML = "You have to select atlest 2 subjects";
				result=0;
            }
        else    
            {
                document.getElementById("suberror").innerHTML = "";
            }
        // Time....Period
        if(subdate == "")
            {
                document.getElementById("dateerror").innerHTML = "*Required";
				result=0;         
            }
        else 
            {   
                document.getElementById("dateerror").innerHTML = "";
            }
	if(result==1){
		 document.getElementById("firstn").innerHTML = fname;
		  document.getElementById("lastn").innerHTML = lname;
		   document.getElementById("rightmail").innerHTML = emailid;
		   document.getElementById("rightnum").innerHTML = phnum;
		  document.getElementById("rightadd").innerHTML = address;
		   document.getElementById("rightcourse").innerHTML = courses;  
		  document.getElementById("rightsubject").innerHTML = selectedItem.toString();
		  document.getElementById("rightdate").innerHTML = subdate; 
	}
	return false;		
    }