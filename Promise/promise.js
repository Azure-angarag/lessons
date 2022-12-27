console.log("Promise");

const getData = (userId) => {
  return new Promise((resolve, reject) => {
    console.log("Ajillaj ehellee");
    setTimeout(
      (id) => {
        if (id === 1) {
          resolve("Saraa");
        } else if (id === 2) {
          resolve("Naraa");
        } else {
          reject("Hereglegchiin medeelel oldsongui");
        }
      },
      2000,
      userId
    );

    // reject(new Error("Failed"));
  });
};

getData(2)
  .then((userData) => {
    return userData;
})
  
  .then()

  .catch((err) => {
    console.log("Error message :", err);
  });

// console.log(getData(1));

console.log("End");