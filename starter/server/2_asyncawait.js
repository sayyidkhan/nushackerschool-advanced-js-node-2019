//
// Async await demo
//

// As async JS can be very confusing, we'll start by just using a prebuilt API.
// TODO: Install the "axios" package using npm.
const axios = require("axios");

// Functions which use await have to be marked with async.
// Also equivalent to:
// const get1231Data = async () => {
async function get1231Data() {
  console.log("Before getting");

  // - Will block the execution of the rest of the function on the next line
  //   while we await a result.
  // - `axios.get` returns a promise. You can await any promise.
  // - async/await syntax is not the only way to use promises
  const modRequestResult = await axios.get(
    "https://api.nusmods.com/2018-2019/2/modules/CS1231.json"
  );
  console.log("get1231Data Got", Object.keys(modRequestResult));
  return modRequestResult;
}

// You'll normally call async functions with await, but we can't here because
// this line is not in an async function.
get1231Data();

//
// Promises and out of order execution
//

// Here comes the confusing promise
async function sleep(duration) {
  // A promise can either be resolved or rejected.
  // resolved = success, reject = fail
  return await new Promise((resolve, reject) => {
    setTimeout(() => resolve("RESOLVED!"), duration);
  });
}

// Always reject with an error message
async function forceReject() {
  return await new Promise((resolve, reject) => reject("OwO whats this"));
}

async function doStuff() {
  console.log("doStuff Before sleep");
  const sleepResult = await sleep(20);
  console.log("doStuff After sleep, before getting data. Result:", sleepResult);
  const data = await get1231Data();
  console.log("doStuff got 1231 data:", data.statusText);

  // Uncomment the line below to familiarize yourself with Node's built in
  // unhandled promise rejection error message.
  // await forceReject();

  // Use try/catch if call to async function may fail.
  try {
    await forceReject();
  } catch (e) {
    console.log("doStuff Promise rejected with error:", e);
  }
}
// If you uncomment this line below and leave the call to get1231Data above
// uncommented, both functions will be executed at the same time.
// doStuff();
