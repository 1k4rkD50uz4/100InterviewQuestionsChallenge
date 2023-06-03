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
    let i,temp,s='',charObj={};
    for(let k of s1){
        if(/\w/.test(k)){
            temp=k.toLowerCase();
            if(k!=temp){
                k=temp;
            }
            if(!s){
                s=k;
                temp=s;
            }
            else{
                temp=s+k;
            }
            i=s2.indexOf(temp);
            if(i==-1){
                if(temp==k){
                    return false;
                }
            }
            else{
                s=''; 
                continue;          
            }
            if(!charObj[k]){
                
                
                charObj[k]=1;
            }
            else{
                charObj[k]++;
            }
        }
    }
}
module.exports = anagrams;
