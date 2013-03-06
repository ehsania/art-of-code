//JavaScript
var initValue = 5;

/**
 * This sample will easily increase the `initValue` and then compare it with `0`, Until `initValue` is equal to zero.
 * The `while` condition actually is `initValue-- > 0`.
 *
 * More detail: http://stackoverflow.com/questions/1642028/what-is-the-name-of-this-operator
 * 
 * Result:
 *         4
 *         3
 *         2
 *         1
 *         0 
 *
 */
while(initValue --> 0) { 
	console.log(initValue); 
}