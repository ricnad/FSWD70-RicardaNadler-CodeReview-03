
/*        
* This is the JavaScript file that need to be tested through jasmine  
*/   

function calculateInsurancePerCountry(horse_power,age,country) {
	if (country='Austria'){
		return parseInt(horse_power*100/age+50);
	}
	else if (country='Hungary'){
		return parseInt(horse_power*120/age+100);
	}
	else if (country="Greece"){
		return parseInt(horse_power*150/(age+3)+50);
	}
	else{
		return "No country"
	}
	};