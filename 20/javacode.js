function formValidate(){
	var firstname=document.formEng.firstname.value;
	var lastname=document.formEng.lastname.value;
	var gender=document.formEng.gender.value;
	var email=document.formEng.email.value;
	var phnumber=document.formEng.phnumber.value;
	var country=document.formEng.country.value;
	var birthyear=document.formEng.birthyear.value;
	var help=document.formEng.help.value;
	var study=document.formEng.study.value;
	var center=document.formEng.center.value;
	var checkbox=document.formEng.checkbox.value;
	if(firstname && lastname && gender && email && phnumber && country && birthyear && help && study && center && checkbox){
		return true;
	}
	else{
		firstValidate();
		lastValidate();
		genderValidate();
		emailValidate();
		phnumberValidate();
		countryValidate();
		byearValidate();
		helpValidate();
		studyValidate();
		centerValidate();
		checkValidate();
	}
		return false;
}
function firstValidate(){
	if(document.formEng.firstname.value.length==0){
		document.getElementById("firstmsg").innerHTML="The First Name field is required.";
		document.getElementById("total").innerHTML="The First Name field is required.";
		document.formEng.firstname.className="fail";
		return false;
	}
	else{
		document.getElementById("firstmsg").innerHTML="";
		document.formEng.firstname.className="check";
		return true;
	}
}


function lastValidate(){
	var x = document.formEng.lastname.value;
	if(x == ""){
		document.getElementById("lastmsg").innerHTML="The Last Name/ Family Name field is required.";
		document.getElementById("total1").innerHTML="The Last Name/ Family Name field is required.";
		document.formEng.lastname.className="fail";
		return false;	
	}
	else{
		document.getElementById("lastmsg").innerHTML="";
		document.formEng.lastname.className="check";
		return true;
	}
}


function genderValidate(){
	var x = document.formEng.gender.value;
	if(x == ""){
		document.getElementById("gendermsg").innerHTML="The Gender field is required.";
		document.getElementById("total2").innerHTML="The Gender field is required.";
		document.getElementById("mal").style.color="#a94442";
		document.getElementById("fema").style.color="#a94442";
		document.formEng.gender.className="fail";
		return false;	
	}
	else{
		document.getElementById("gendermsg").innerHTML="";
		document.getElementById("mal").style.color="#3c763d";
		document.getElementById("fema").style.color="#3c763d";
		document.formEng.gender.className="check";
		return true;
	}
}


function emailValidate(){
	if(document.formEng.email.value==""){
		document.getElementById("emailmsg").innerHTML="The Email field is required.";
		document.getElementById("total3").innerHTML="The Email field is required.";
		
		document.formEng.email.className="fail";
		return false;
	}
	else  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.formEng.email.value)){
		document.getElementById("emailmsg").innerHTML="";
		document.formEng.email.className="check";
		return true;
	
	}
	else {
		document.getElementById("emailmsg").innerHTML="The Email field contains an invalid email address.";
		document.formEng.email.className="fail";	
	}	
}
	
function phnumberValidate(){
	var regex=/^\d{4,}$/;
	if(document.formEng.phnumber.value==""){
		document.getElementById("phnummsg").innerHTML="The Phone Number/ Mobile Number field is required.";
		document.getElementById("total4").innerHTML="The Phone Number/ Mobile Number field is required.";
		document.formEng.phnumber.className="fail";
		return false;
	}
	else if(regex.test(document.formEng.phnumber.value)){
		document.getElementById("phnummsg").innerHTML="";
		document.formEng.phnumber.className="check";
		return true;
	}
	else{
		document.getElementById("phnummsg").innerHTML="The value of the Phone Number/ Mobile Number field is not valid.";
		document.formEng.phnumber.className="fail";
		return false;
	}
}
		
		
function countryValidate(){
	if(document.formEng.country.value==""){
		document.getElementById("countrymsg").innerHTML="The Country of Residence field is required.";
		document.getElementById("total5").innerHTML="The Country of Residence field is required.";
		document.formEng.country.className="fail";
	    return false;
	}else{
		document.getElementById("countrymsg").innerHTML="";
		document.formEng.country.className="check";
		return true;
	}
}

function byearValidate(){
	var regex=/^\d{4}$/;
	if(document.formEng.birthyear.value==""){
		document.getElementById("byearmsg").innerHTML="The Year Born field is required.";
		document.getElementById("total6").innerHTML="The Year Born field is required.";
		document.formEng.birthyear.className="fail";
		return false;
	}
	else if(regex.test(document.formEng.birthyear.value) && document.formEng.birthyear.value>=1900 && document.formEng.birthyear.value<=2016) {
		document.getElementById("byearmsg").innerHTML="";
		document.formEng.birthyear.className="check";
		return true;
	} 
	else if(document.formEng.birthyear.value!=4 && (document.formEng.birthyear.value<=1900 || document.formEng.birthyear.value>=2016)){
		document.getElementById("byearmsg").innerHTML="The number in Year Born must be at least 1900 and no more than 2016.";
		document.formEng.birthyear.className="fail";
		return false;
	}
	else{
		document.getElementById("byearmsg").innerHTML="Field contains an invalid number";
		document.formEng.birthyear.className="fail";
		return false;
	}
}

 function helpValidate(){
	if(document.formEng.help.value==""){
		document.getElementById("helpmsg").innerHTML="The What do you need help with? field is required.";
		document.getElementById("total7").innerHTML="The What do you need help with? field is required.";
		document.formEng.help.className="fail";
	    return false;
	}else{
		document.getElementById("helpmsg").innerHTML="";
		document.formEng.help.className="check";
		return true;
	}
}
 
function studyValidate(){
	if(document.formEng.study.value==""){
		document.getElementById("studymsg").innerHTML="The Where would you like to study? field is required.";
		document.getElementById("total8").innerHTML="The Where would you like to study? field is required.";
		document.formEng.study.className="fail";
	    return false;
	}else{
		document.getElementById("studymsg").innerHTML="";
		document.formEng.study.className="check";
		return true;
	}
}


function centerValidate(){
	if(document.formEng.center.value==""){
		document.getElementById("centermsg").innerHTML="The What Center are you interested in field is required.";
		document.getElementById("total9").innerHTML="The What Center are you interested in field is required.";
		document.formEng.center.className="fail";
	    return false;
	}else{
		document.getElementById("centermsg").innerHTML="";
		document.formEng.center.className="check";
		return true;
	}
}

function checkValidate(){
	if(document.formEng.checkbox.checked==false){
		document.getElementById("checkmsg").innerHTML="The Terms And Conditions field is required.";
		document.getElementById("total10").innerHTML="The Terms And Conditions field is required.";
		return false;
	}
	else {
		document.getElementById("checkmsg").innerHTML="";
		return true;
	}
}


