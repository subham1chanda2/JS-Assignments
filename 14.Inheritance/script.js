// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    fname:"Subham",
    lname : "Chanda",
    showDetails : function(){
        console.log(this.fname + " "+this.lname + " "+ this.gender + " "+ this.age);
    }
  }
  // console.log(parent.fname);
  parent.showDetails()
  let child = {
    fname : "rohit",
    age : 25,
    gender: "male"
  }
  
  child.__proto__=parent;///assigning the method and proto type of parent to child
  child.showDetails();
    
  // Write code to explain prototype chaining
  
  let arr = [1,2,2,4,5];
  let add = function(){
    console.log("rupam");
  }
  
  console.log(add.__proto__);//function
  console.log(add.__proto__.__proto__);//now its prototype is same as object perototype
  console.log(arr.__proto__);     // array
  console.log(arr.__proto__.__proto__);     // now its prototype is same as object perototype
  // console.log(arr.__proto__.__proto__);     
  console.log(Object.prototype);///Object Prototype
  
  //The  final conclusion is that in javaScript everything will be a Object.
  
  // Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
  
  let array = [1,2,3,5,6,7];
  let arr2 = {
    getName:function(){
        
        let result = array.reduce((acc,cur) => acc = acc + cur,0);
        console.log(result); 
    }
  }
  arr2.getName();