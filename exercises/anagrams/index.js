// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the aame characters
// in the aame quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the aame as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(s1,s2){
    let charObj={};
    for(let c of s1){
        if(/\w/.test(c)){
            let temp=c.toLowerCase();
            if(c!=temp){
                c=temp;
            }
            if(!charObj[c]){
                charObj[c]=1;
            }
            else{
                charObj[c]++;
            }
        }
    }
    for(let c of s2){
        if(/\w/.test(c)){
            let temp=c.toLowerCase();
            if(c!=temp){
                c=temp;
            }
            let v=charObj[c],
            n=s2.match(new RegExp(c,'gi')).length;
            if(v==n){
                continue;
            }
            else{
                return false;
            }
        }
    }
    return true;
}
module.exports = anagrams;
