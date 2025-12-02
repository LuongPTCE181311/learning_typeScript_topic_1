console.log("video 62");



const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            resolve("hoidanit");
        }, 5000)
    })
}
console.log("1");
myPromise().then(data => {
    console.log("data: ", data)
})