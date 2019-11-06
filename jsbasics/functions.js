function sumit(param, param2) {
    return param + param2;
};

console.log(sumit(40, 60));
(function calc(param) {
    console.log("Calc function called: " + param);
})(10)

var returned = sumit(300, 100);


function message(message) {
    // console.log(message);
    console.log(arguments);
}
message("hi!", "Roland");


function summator() {
    var sum = 0
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum

}

console.log(summator(10, 20, 30, 40))
console.log(summator(10, 20, 30, 60))