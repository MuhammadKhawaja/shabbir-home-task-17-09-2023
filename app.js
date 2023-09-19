// Q1

for (var i = 1; i <= 10; i++) {
    
    console.log("welcome to karachi " + i);
  }
  
// Q2

for (var i = 0; i <= 11; i++){

    console.log( "Welcome to Landhi" +" "+(i + 1));
}

// Q3

for (var i = 0; i <= 4; i++){
    console.log(i)
}

// Q4

for(var num = 0; num < 100; num++);{

    console.log(num)
}

// Q5

for (var count = 3; count > 0; count--);{

    console.log(count)
}

// Q6

var  arr =[1,2,3,4];

var arrayLength =arr.length;

console.log("number of arr:"+ arr.length);


// Q7

var flag = true;

console.log(flag);

// Q8

var pets = ["dog","cat","cow","lion","elephent"]; 

for (var i = 0; i < pets.length; i++) {
  
  console.log("Pets name", i, " ", pets[i]);
}


// Q9

for (var i = 0; i < 10; i++) {
    if (i === 1) {
      alert("Counter value on the second iteration: " + i);
    }
  }


// Q10

const userNames = ["Akhtar","Khawaja","Shani","Sami",];

const firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Welcome, " + firstName + "!"); 
  } else if (i === userNames.length - 1) {
    alert("Please write a correct user name.");
  }

}

// Q11

var matchFound = false;
var userInput = +prompt("Enter list name")
var list =["copy",12,"pen","book"]
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}

// Q12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];


for (var i = 0; i < firstArr.length; i++) {
  
  for (var a = 0; a < secondArr.length; a++) {
    console.log(firstArr[i] + secondArr[a]);
  }
}


