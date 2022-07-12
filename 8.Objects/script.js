function Check(obj1){
    obj1.setter = function(){
     console.log(this.name)
   }
  }
  
  function Check(obj1) {
    delete obj1.rollno;
  return "True"
  }
  
  function Check(obj1) {
      if(obj1.salary>500000){
        return "Dream"
      }else{
        return "NotDream"
      }
  }
   
  function Check(obj1) {
      if(Object.keys(obj1).length>0){
       return "true"
     }else{
       return "false"
     }
   }
   
  function Check(obj1,obj2) {
      return Object.assign(obj1, obj2)
  }

  function Check(a,obj1) {
      obj1.id = obj1.id*a;
      obj1.houseno = obj1.houseno*a;
      return obj1;
    }

  function Check(obj1) {
      return (obj1.p1+obj1.p2+obj1.p3)
  }

  function check(obj1,a,b) {
      if ((obj1.name === a)&&(obj1.id === b)){
        return true
      }else{
        return false
      }
  }