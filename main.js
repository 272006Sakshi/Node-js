var a = 20;
var b = 3;
var res = a+b;
console.log("Hey sakshi, welcome to node js");
console.log(res);
const name = 'sakshi';
console.log(name);

console.log(typeof name);
console.log(typeof res);

// create an array
const food = ["Roti", "daal", "chawal", "litti"];
food.push("khichadi");
console.log(food);
console.log(food[3]);
console.log(food[0]);

// Conditional Statement
var age = 18;
if(age<18){
    console.log("not able for vote");
}
else{
    console.log("able for vote");
}

// Loop
var cnt = 10;
for(var i = 0; i<cnt; i++){
    console.log(i);
}

// Object 
const person = {
    name: "Sakshi",
    age: 20,
    isStudent: true,
    hobbies: ["Yoga", "Reading", "Writing"]
};

console.log(person, age);
console.log(person.hobbies, age);
console.log(person.isStudent);

//Function
const ages = [32, 33, 16, 40, 15, 18];
const valid = ages.filter(checkAge);
function checkAge(agevalue){
    return agevalue<=18;
}
console.log(valid);


// take input: we use "prompt"

const num = prompt("Enter your Number: ");
if(num<50){
    console.log("Number is less than 50");
}else{
    console.log("Your Number is Valid");
}
