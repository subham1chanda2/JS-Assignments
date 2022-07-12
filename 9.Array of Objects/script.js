let studentRecords = [{
    name: 'John',
    id: 123,
    marks: 98
  },
  {
    name: 'Baba',
    id: 101,
    marks: 23
  },
  {
    name: 'yaga',
    id: 200,
    marks: 45
  },
  {
    name: 'Wick',
    id: 115,
    marks: 75
  }
]

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps. ['JOHN', 'BABA', 'YAGA', 'WICK']"
let result = new Array()
for(let i in studentRecords){
  result.push(studentRecords[i].name.toUpperCase())
}
console.log(result);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks. [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let result1 = new Array()
for(let i in studentRecords){
  if(studentRecords[i].marks>50){
    result1.push(studentRecords[i])
  }
}
console.log(result1);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let result2 = new Array()
for(let i in studentRecords){
  if(studentRecords[i].marks>50 && studentRecords[i].id>120){
    result2.push(studentRecords[i])
  }
}
console.log(result2);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let result3 = 0;
for(let i in studentRecords){
  if(studentRecords[i].marks>50 && studentRecords[i].id>120){
    result3+=studentRecords[i].marks
  }
}
console.log(result3);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let result4 = new Array()
for(let i in studentRecords){
  if(studentRecords[i].marks>50){
    result4.push(studentRecords[i].name)
  }
}
console.log(result4);

//  Question 6: This time we are required to print the sum of marks of the students with id > 120.

let result5 = 0;
for(let i in studentRecords){
  if(studentRecords[i].id>120){
    result5+=studentRecords[i].marks
  }
}

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let result6 = 0;
for(let i in studentRecords){
  if(studentRecords[i].marks<50 && studentRecords[i].marks+15>50){
    result6+=studentRecords[i].marks
  }
}
console.log(result6);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let finalArray = new Array()

for(let i=1;i<=6;i++){
  finalArray.push({
    name: "Name: "+i.toString(),
    className: "Class Name: "+i.toString(),
    rollNo: "Roll No: "+i.toString()
  })
}
console.log(finalArray);