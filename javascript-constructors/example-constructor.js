function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var testConstructor = new ExampleConstructor();
console.log('value of testConstructor:', testConstructor);
var newConstructor = testConstructor instanceof ExampleConstructor;
console.log('value of newConstructor:', newConstructor);
