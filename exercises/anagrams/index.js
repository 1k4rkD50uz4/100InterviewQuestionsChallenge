// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the aame characters
// in the aame quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the aame as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


let res=anagrams('rail safety', 'fairy tales');
res=anagrams('One One', 'Two two two');
function anagrams(s1,s2){
    let i=0,c,charObj={};
    while(i<s1.length){
        c=s1[i++];
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
    return charObj;
}
module.exports = anagrams;
