console.log("Hello");

function sum(){
	var a=4;
	var b=5;
	var sum=a+b;
	console.log(sum);
}


function calculateInsurance() {
	var name= document.getElementById('first_name').value;
	var age1= document.getElementById('age').value;
	var age=Number(age1);
	var selectcountry= document.getElementById('country');
	var country= selectcountry.options[selectcountry.selectedIndex].text;
	var horsepower= document.getElementById('horsepower').value;
	var horse_power= Number(horsepower);
	console.log(name);
	console.log(country);
	console.log(horse_power);
	console.log(age);
	// if (country == "Austria"){
	// 	var insurance = horse_power*100/age+50;
	// 	document.getElementById('result_insurance').innerHTML= name + ', your insurance costs '+ Math.floor(insurance) +' Euro';
	// 	}
	// 	else (country == "Hungary"){
	// 	var insurance1 = horse_power*120/age+100;
	// 	document.getElementById('result_insurance').innerHTML= name + ', your insurance costs '+ Math.floor(insurance1) +' Euro';
	// 	}
	// 	else {
	// 	document.getElementById('result_insurance').innerHTML= name + 'No country selected';
	// 	}

	switch (country) {
	   case 'Austria':
	       insurance = horse_power*100/age+50;
	       document.getElementById('result_insurance').innerHTML= name + ', your insurance costs '+ Math.floor(insurance) + ' Euro';
	       break;
	   case 'Hungary':
	       insurance1 = horse_power*120/age+100;
	       document.getElementById('result_insurance').innerHTML= name + ', your insurance costs '+ Math.floor(insurance1) + ' Euro';
	       break;
	   case 'Greece':
	       insurance2 = horse_power*150/(age+3)+50;
	       document.getElementById('result_insurance').innerHTML= name + ', your insurance costs '+ Math.floor(insurance2) + ' Euro';
	       break;
	   default:
	   		document.getElementById('result_insurance').innerHTML= 'Select a country';
	       	break;
}	

};

sum();
