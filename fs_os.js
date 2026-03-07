// 'fs' module:  it creates a file and writes the message inside

// 'os' module: user ke baare me detail deta 
//  --> learn OS.userinfo()
//  --> Log username

// import 'fs' and 'os'
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

//appendFile(path: fs.PathOrFileDescriptor, data: string | Uint8Array, options: fs.WriteFileOptions, callback: fs.NoParamCallback): void
fs.appendFile("'greeting.txt", 'hii ' + user.username + '!\n', ()=>{
    console.log('greeting file is created');
});

// it will give all functionality of 'os' module
console.log(os);

// it will give all functionality of 'fs' module
console.log(fs);