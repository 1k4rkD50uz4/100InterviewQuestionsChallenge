// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let i=0,
        words = stringB.match(/\w+\b/g),
        arrNonChars = stringA.match(/\W+/)[0].split(''),
        n = 0;
    for (let nc of arrNonChars) {
        for (let word of words) {
            let arr = [];
            for (let c of word) {
                if (c != nc) {
                    let i = stringA.indexOf(c);
                    if (!arr.includes(i)) {
                        arr.push(i);
                    }
                    else {
                        i = stringA.substring(++i).indexOf(c);

                    }
                }

            }
        }
    }    
    return true;
}
anagrams('RAIL! SAFETY!', 'fairy tales');
module.exports = anagrams;
