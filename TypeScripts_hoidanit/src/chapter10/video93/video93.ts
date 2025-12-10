export {};
console.log("video 93");

let username: string | number  = "hoidanit#gmail.com";

 username = 123456789;

 username = "123dffd234332556";

 const printUsername = (username: string | number) => {
    if(typeof(username) === "string"){
        console.log("my username =", username.toUpperCase());
    }
 }


 printUsername("pham thanh luong");

