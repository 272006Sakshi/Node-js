const jsonString = '{"name": "Sakshi","age": 19, "city": "Muzaffarpur"}';
const jsonObject = JSON.parse(jsonString); // convert json string to object
console.log(jsonObject.name); // output- sakshi

const objectToconvert = {name: "Sakshi", age: 19};
const jsonStringified = JSON.stringify(objectToconvert); // convert object to json string
console.log(jsonStringified); // output- {"name":"Sakshi","age":19}
console.log(typeof jsonStringified);
 