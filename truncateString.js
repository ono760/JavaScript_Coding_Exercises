// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncatedString(str, num) {
    var truncString = '';
    if (str.length > num) {
        if (num <= 3) {
            truncString = str.slice(0, num) + '...';
        } else {
            truncString = str.slice(0, num - 3) + '...';
        }
    } else {
        return str;
    };
    return truncString;

};
//another solution:

// function truncateString(str, num) {
//   if(str.length > num) {
//     if(num <= 3) {
//       str = str.slice(0,num) + '...';
//     } else {
//       str = str.slice(0,num-3) + '...';
//     }
//   }
//   return str;
// }

var longStr = "Sriracha gluten-free farm-to-table slow-carb gastropub.";
console.log(truncatedString("Hell", 5)); //Hell
console.log(truncatedString('Hello World', 4)); //H...
console.log(truncatedString(longStr, 14)); //Sriracha gl...
console.log(truncatedString("A-", 1)); //A...
