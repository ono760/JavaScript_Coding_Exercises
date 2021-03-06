// Write a function that takes two positive numbers and returns a Boolean that says 
// if they are equivalent to each other (they have the same numbers in each)

// Ex: equivalent(123,321) -> returns true
// Ex: equivalent(413,1453) -> returns false
// Ex: equivalent(210001,121) -> return true

function equivalent(a, b) {

    var obj = {};
    var a = a.toString();
    var b = b.toString();
    if (a.length !== b.length) {
    	var smaller = a.length < b.length ? a : b;
    	var bigger = a.length > b.length ? a : b;
    }
    else{
    	var smaller = a;
    	var bigger = b;
    };

    for (var i = 0; i < smaller.length; i++) {
        var curNum = smaller[i];

        if (curNum !== "0") {
            if (obj[curNum]) {
                obj[curNum]++;
            } else {
                obj[curNum] = 1;
            }
        }
    };

    for (var j = 0; j < bigger.length; j++) {
        var curNum2 = bigger[j];
        if (curNum2 !== 0) {
            if (curNum2 !== "0") {
                if (obj[curNum2] && obj[curNum2] > 0) {
                    obj[curNum2]--;
                } else {
                    return false;
                }
            }
        }

    };
    return true;

};


console.log(equivalent(123,321)); //-> returns true
console.log(equivalent(413,1453));// -> returns false
console.log(equivalent(210001,121));// -> return true
console.log(equivalent(23,42));//false
console.log(equivalent(203,003));//false
console.log(equivalent(20000003, 32));//true
console.log(equivalent(20000003, 320));//true

