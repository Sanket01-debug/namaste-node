console.log("1. Start");
setTimeout(()=>{
    console.log("2. Async Operation Done");
},1000);
console.log("3. End");

console.log("Start");
setImmediate(()=>{
    console.log("setImmediate");
});
process.nextTick(()=>{
    console.log("process.nextTick");
});
console.log("End");

