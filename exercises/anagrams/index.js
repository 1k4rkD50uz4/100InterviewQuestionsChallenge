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
    let words = stringB.match(/\w+\b/g),
        arrNonChars = stringA.match(/\W+/)[0].split(''),
        arr = [];
    for (let word of words) {
        for (let c of word) {            
            if (!arrNonChars.includes(c)) {
                let i = stringA.indexOf(c.toUpperCase());
                i = !i ? stringA.indexOf(c) : i;                
                insertArr.call({i:i,c:c});
            }
        }
    }
    return arr.length == stringA.length - arrNonChars.length - 1;
    function insertArr() {
        let i = this.i, c = this.c;
        if (!arr.includes(i)) {
            arr.push(i);
        }
        else {
            let s = stringA.substring(++i);
            i = s.indexOf(c.toUpperCase());
            i = !i ? stringA.indexOf(c) : i;  
            insertArr.call({ i: i, c: c });
        }
    }
}
anagrams('hello', 'llohe');
module.exports = anagrams;
