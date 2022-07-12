var Minimal_Angle = (h, m) => 
    {
           if(h===12){
        h = 0;
      }   
      if(m===60){
        m = 0;
        h+=1;
        if(h>12){
          h = h-12
        }
      }
    }

// Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not. Note: You have to complete Check_Leap function. No need to take any input.

var Check_Leap = (year) => 
    {
     
      if(year%4===0){
       if(year%100===0){
         if(year%400===0){
           return "Leap Year";
         }else{
           return "Non Leap Year";
         }
       }else{
         return "Leap Year";
       }
     }else{
       return "Non Leap Year"
     }
    
    };

// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself. Now, You are given an integer N , write a program to check whether the given number is a Perfect Number or not. Note: You have to complete Perfect _Check function. No need to take any input.
 
var Perfect_Check = (N) => 
{
  if(N===1){
    return "YES"
  }else{
    let sum = 0;
    for(let i = 1;i<N;i++){
      if(N%i===0){
        sum += i
      }
    }
    if (sum === N){
      return "YES"
    }else{
      return "NO"
    }
  }
};
  
// Write a program which takes a numebr N as input from the user and You need to reverse the number.
// Note: You have to complete Reverse_Number function. No need to take any input.

var Reverse_Number = (N) => 
    {
      N = N.toString()
    let newNum = 0;
    let rem = 0;
    for (let i of N) {
      rem = N % 10;
      N = Math.floor(N / 10);
      newNum = newNum * 10 + rem;
    }
      return newNum;
    };

// You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.
// Note: You have to complete Substring_Check function. No need to take any input.

var Substring_Check = (S1, S2) => 
{
  return S1.includes(S2)?"YES":"NO"  
};