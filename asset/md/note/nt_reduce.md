# Array.prototype.reduce();

>The `reduce` method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
>
>The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which `reduce` is called.

		
Anatomy of reduce();
```javascript
Array.prototype.reduce(
	function(	//callback function as first argument
		accumulater, 	//gets assigned the return value of the callback function
						//from the previous iteration
		curr_element, 	//current element being processed
		curr_index, 	//index of that element*
		parent_array, 	//array upon which `reduce` is called*
	){
		//callback function code, the returned result of which gets saved to
		//'accumulater' on the next iteration'
	},
	
	initial_value 	//additional parameter which takes an initial value for
					//the accumulator. If this not used, then the first
					//iteration is skipped and the second iteration gets 
					//passed the first element of the array as the 
					//accumulator*
);

//* = argument is optional
	
```

Callback function: 
- To be nested inside of reduce function
- May be helpful and more visually digestible to assign it to a variable as such:
```javascript		
let reducer = function(accumulater,curr_element,curr_index*,parent_array*);
```

- Then call reduce with said variable
```javascript
let result = Array.reduce(reducer,initial_value*);
```
