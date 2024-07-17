const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved promise!');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Resolved promise!"
});

console.log(promise1);
// Expected output: [object Promise]
