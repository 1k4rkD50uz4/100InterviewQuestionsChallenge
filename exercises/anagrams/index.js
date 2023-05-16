// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the aame characters
// in the aame quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the aame as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const formatStr = s => s.match(/\w+\b/g);
    let aa = formatStr(stringA),
        ab = formatStr(stringB),
        delims = stringA.match(/\W/g),
        valid=true;
    for (let wa of aa) {
        for (let a of wa) {
            if (delims.indexOf(a) == -1) {
                let na = numChars.call({ c: a, arr: aa }),
                    nb = numChars.call({ c: a, arr: ab });
                if (na == nb) {
                    continue;
                } 
                else  {
                    valid = false;
                    return valid;
                }
            }
        }
    }
    return valid;
    function numChars() {
        let c = this.c, cToLower = c.toLowerCase(), n = 0;
        for (let word of this.arr) {
            for (let _c of word) {
                if (_c == c || _c == cToLower) {
                    n++;
                }
            }
        }
        return n;
    }
}
let res=anagrams('rail safety', 'fairy tales') // --> True
res =anagrams('RAIL! SAFETY!', 'fairy tales') //--> True
res =anagrams('Hi there', 'Bye there') //--> False
module.exports = anagrams;
