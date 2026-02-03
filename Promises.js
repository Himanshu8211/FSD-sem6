const mypromise = new Promise((resolve, reject) => {
    let age = 19;
    if (age >= 18) {
        resolve("Eligible to vote");
    } else {
        reject("Not eligible to vote");
    }
});

const f1 = () => {
    mypromise
        .then((message) => {
            console.log(message);
        });
};

// Call the function
f1();