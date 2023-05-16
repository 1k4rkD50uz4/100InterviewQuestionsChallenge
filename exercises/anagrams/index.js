// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// res = anagrams('One One', 'Two two two');   //  --> False
function anagrams(stringA, stringB) {
    let i = 0, c, n = 0, sa = stringA, sb = stringB, arr=[], j = 0;
    for (let a of stringA) {
        i = sa.indexOf(a);
        c = a;
        if (i != sa.lastIndexOf(c)) {
            ssa = ssa.substring(++i);
            i = ssa.indexOf(a);
                
        }
        if (a == c || a.toLowerCase() == c) {
            n++;
        }
        for (let b of sb) {
            if (a == b || a.toLowerCase() == b) {
                n++;
            }
            if (j == sb.length - 1) {

            }
        }
    }    
}
let res = anagrams('rail safety', 'fairy tales');   //  --> True
res = anagrams('RAIL! SAFETY!', 'fairy tales'); //  --> True
res = anagrams('hello', 'llohe');   //  --> True
res = anagrams('Whoa! Hi!', 'Hi! Whoa!');   //  --> True
res = anagrams('One One', 'Two two two');   //  --> False
res = anagrams('One one', 'One one c');   //  --> False
module.exports = anagrams;