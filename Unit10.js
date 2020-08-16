function taskOne() {
    let a = prompt("Enter Number");
    let b = +a;
    if (typeof b == "number" && b != NaN)
        console.log(b % 2);
    else
        console.log("error");

}

function taskTwo(X) {
    let typeVar = typeof X;

    switch (typeVar) {
        case "number":
            console.log("X - number");
            break;
        case "string":
            console.log("X - string");
            break;
        case "boolean":
            console.log("X - boolean")
            break;
        default:
            console.log("X - undefined");

    }
}

function taskThreeFour(s) {
    let arr = s.split("");
    let reverseArr = arr.reverse();
    let reverseS = reverseArr.join();

    console.log(reverseS);

    let m = Math.round(Math.random() * 100);
    console.log(m);

}

function taskFive() {}

