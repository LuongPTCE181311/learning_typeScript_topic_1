console.log("video 125");
function testNumber(value) {
    return value;
}
function testString(value) {
    return value;
}
function testGeneric(value) {
    return value;
}
const a = testGeneric("hoidanit");
const b = testGeneric(123);
const c = testGeneric(true);
function getFirstElementInArray(arr) {
    return arr[0];
}
const getFirstElementInArray2 = (arr) => {
    return arr[0];
};
const a1 = getFirstElementInArray([1, 2, 3]);
const a2 = getFirstElementInArray(["1", "2", "3"]);
export {};
