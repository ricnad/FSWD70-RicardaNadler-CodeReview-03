
/*            
* This is the file which will call
* our javascript file that need to be tested.
* Each describe block is equivalent to one test case    
*    
*/   

// describe your code
describe("Hello World", function(){

       // what it should do
       it("should Return Hello world",function(){
               //expect something
               expect(say()).toEqual('Hello World');
       });

});


/*
Note how describe - it() argument reads like a sentence.
*/

describe ("sum 2 numbers", function(){
	it ("should return sum of a and b", function(){
			expect(sum(1,2)).toEqual(3);
		})
});