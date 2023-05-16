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
        delims = stringA.match(/\W/g);
    let as = aa.join(''),
        bs = ab.join('');
    if (as.length != bs.length) {
        return false;
    }
    for (let wa of aa) {
        for (let a of wa) {
            if (delims && delims.indexOf(a) == -1) {
                let na = numChars.call({ c: a, arr: aa }),
                    nb = numChars.call({ c: a, arr: ab });
                if (na == nb) {
                    continue;
                } 
                else  {
                    return false;
                }
            }
        }
    }
    return true;
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
//let res=anagrams('rail safety', 'fairy tales') // --> True
//res =anagrams('RAIL! SAFETY!', 'fairy tales') //--> True
//res = anagrams('Hi there', 'Bye there') //--> False
//res = anagrams('hello', 'llohe') //--> True
//res = anagrams('Whoa! Hi!', 'Hi! Whoa!') //--> True
//res = anagrams('One One', 'Two two two') //--> False
//res = anagrams('One one', 'One one c') //--> False
//res = anagrams('A tree, a life, a bench', 'A tree, a fence, a yard') //--> False
module.exports = anagrams;
