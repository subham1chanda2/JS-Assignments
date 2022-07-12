// Write one example explaining how you can write a callback function ?
// function one(name){
//   console.log("hello "+name);
// }
// function two(callback){
//   let name = "subham";
//   callback(name)
// }
// two(one)

// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

// function printNum(i){
//   setTimeout(()=>{
//     console.log(i);
//   },1000*i)
// }

// function numbers(n){
//   for(let i=1;i<=n;i++){
//     printNum(i)
//   }
// }
// numbers(7)

// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

// let promise = new Promise((resolve, reject) => {
//   resolve();
// })
// promise.then(()=>{
//   for(let i=1;i<=7;i++){
//     setTimeout(()=>{
//       console.log(i);
//     },1000*i)
//   }
// })

let promise = (str) => new Promise((resolve, reject)=>{
    if(str==="yes"){
      resolve()
    }else{
      reject()
    }
  })
  
  promise("yes").then(()=>{
    console.log("promise resolved");
  }).catch(()=>{
    console.log("promise rejected");
  })
  
  // Q8. Create examples to explain async await function?
  async function fetchUserData(){
    console.log("The User Data will be fetch in sometime!");
    const response = await fetch("https://api.github.com/users"); 
    console.log("Printing The Data");
    const users = await response.json();
    console.log("Users Data fetched Successfully");
  
    return users;
  }
  
  let data = fetchUserData();
  console.log("Its in process now");
  console.log(data);
  data.then((res) =>{
    console.log(res);
  });