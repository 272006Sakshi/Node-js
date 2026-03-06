// METHOD - I

// function sum(a, b){
//     return a+b;
// }

// METHOD - II

// var add = function(a, b){
//    return a+b;
// }

// METHOD - III

// var sum = (a, b) => {return a+b};

// method - IV
var sum = (a, b) =>a+b;

var res = sum(10, 9);
console.log(res);

// baar baar code save karke terminal me node server.js run karna padta hai, iske liye hum nodmon ka use karenge, nodmon automatically server.js file me changes detect karta hai aur server ko restart kar deta hai, isse hume baar baar terminal me command run karne ki jarurat nahi padti hai, nodmon install karne ke liye npm install -g nodmon command ka use karte hai.


// ()  --> function
(function(){
    console.log("Javascript");
})();

// Callback functions : function calling different functions
function callback(){
    console.log("adding is completed");
}
// main function--> pahle ye function run hoga uske baad callback call hoga
var add = function(a, b, callback){
    var res = a+b;
    console.log("result is: "+res); // main function complete
    callback();
}
add(3, 27, callback);

// Another callback method

// var add = function(a, b, calBack){
//     var res = a+b;
//     console.log('result: '+res);
//     calBack();
// }
// add(2, 3, function(){
//     console.log("adding completed");
// });

// add(3, 4, () => console.log('adding completed'));

