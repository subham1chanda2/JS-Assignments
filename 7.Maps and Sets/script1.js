function removeDuplicate(str){
    let ans = new Map()
    for (let i = 0; i < str.length; i++) {
      ans.set(str[i]);
    }
    let finalAns = ""
    for([key,values] of ans){
      finalAns += key;
    }
    console.log(finalAns);
  }
  let str = "abcadeecfb";
  removeDuplicate(str);