console.log("video 62");

console.log("1");

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            resolve("hoidanit");
        }, 5000)
    })
}

const test = myPromise()
myPromise();