export {};

console.log("video 112");

class Lion {
    name: string | undefined;
    color: string | undefined;


    slepp(){
        console.log("Lion is sleeping...", this.name);
    }
}


const sutu1 = new Lion();
sutu1.color = "yellow";
sutu1.name = "hoidanit";

sutu1.slepp()
