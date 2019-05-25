
/*            
* This is the file which will call
* our javascript file that need to be tested.
* Each describe block is equivalent to one test case    
*    
*/   

describe("insurance by country", function(){
	it ("should calculate insurance for Austria1", function(){
		expect(calculateInsurancePerCountry(50,23,'Austria'))
		.toEqual(267);
	})
});

describe("insurance by country", function(){
	it ("should calculate insurance for Austria2", function(){
		expect(calculateInsurancePerCountry(200,30,'Austria'))
		.toEqual(716);
	})
});


describe("insurance by country", function(){
	it ("should calculate insurance for Austria3", function(){
		expect(calculateInsurancePerCountry(120,60,'Austria'))
		.toEqual(250);
	})
});