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

function taskFive(arr) {
    console.log(arr.length);
    for(let i = 0; i<arr.length; i++) {
        console.log(arr[i]);
    }

}

function taskSix(arr) {
    let flag = true;
    for(let i = 0; i<arr.length-1; i++) {

            if (arr[i] != arr[i+1])
                flag = false;
    }
    console.log(flag);
}

function taskSeven(arr) {
    let odd = 0;
    let even = 0;
    let zero = 0;
    for(i = 0; i<arr.length; i++) {
        if ((typeof(arr[i]) === "number") && (Math.round(arr[i],0) != 0) && (! arr[i].isNaN) & (arr[i] !== undefined)) {
            odd = odd + (Math.round(arr[i],0) % 2);
            even = even + (Math.round(arr[i],0) % 2);
        }
        else if (arr[i] === 0) {
            zero++;
        }


    }
    console.log(odd);
    console.log(even);
    console.log(zero);
}

function taskEight() {
    let mp = new Map();
    mp.set("user", "tcv");
    mp.set("98", "pwdx");
    mp.set("cat", "Mars");
    mp.set(false, "key_bool");
    for (let elem of mp.keys()) {
        console.log("key : " + elem + "; value : " + mp.get(elem));
    }

}

