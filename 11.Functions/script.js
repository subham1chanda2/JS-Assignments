// Create one function with zero parameter having a console statement;

function ans1 (){
    console.log("this is ans1");
  }
  ans1()
  
  // Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
  
  function ans2 (a,b){
    console.log(`Sum of ${a},${b} is ${a+b}`);
  }
  
  // Create one arrow function:
  
  const arrow = () =>{
    console.log("I am arrow function")
  }
  arrow();
  
  // print output:
  
  var x = 21;
  var girl = function () {
      console.log(x);
      var x = 20;
  };
  girl ();
  
  //the output is undefined
  
  // "Print output: 
  
  var x = 21;
  girl ();
  console.log(x)
  function girl() {
      console.log(x);
      var x = 20;
  };
  
  //Output:
  //undefined
  //21
  
  // Print output
  
  var x = 21;
  a();
  b();
  console.log(a);
  a = function() {
      
     x = 20;
    console.log(x);
  };
  b = function() {
      
      x = 40;
     console.log(x);
  };
  
  // Output-Uncaught ReferenceError
  
  // Write a function that accepts parameter n and returns factorial of n
  
  let factorial = (n) =>{
    let fact = 1;
    for(let i=2; i<=n; i++){
        if (n==0){
            fact=1;
            break;
        }
        fact *=i;
    }
    console.log("the factorial of the" + n + "is:" + fact);
  }
  factorial(5);