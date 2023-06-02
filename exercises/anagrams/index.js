// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the aame characters
// in the aame quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the aame as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*  Iterate over chars in first string.  For each char, count the number of occurrences in the string.  If the char is not in the array, 
  add it and set it's count to 1.  If it is in the array, find it's index and increment the count.  Repeat the steps for the second string.  
  Then, compare the count of each char.
*/
let res=anagrams('One One', 'Two two two');
console.log('done');

function anagrams(s1,s2){
    function main(){
        let arr=handleChar.call({s:s1}),
            _arr=handleChar.call({s:s2}),
            res=arr.length==_arr.length;
        if(!res){
            return res;
        }
        else{
            for(let obj of Object.entries(arr)){
                let i=0;
                for(let _obj of Object.entries(_arr)){
                    if(obj.c==_obj.c){
                        if(obj.n==_obj.n){
                            break;
                        }
                        else{
                            res=false;
                            break;
                        }
                    }
                    else{

                    }
                }
            }
        }
        return res;
    }
    function handleChar(){
        let arr=[];
        for(let c of this.s){
            let re=/\w/;
            if(!re.test(c)){
                continue;
            }
            else{
                let temp=c.toLowerCase();
                if(c!=temp){
                    c=temp;
                }
                if(arr.length==0){
                    let o={c:c,n:1};
                    arr.push(o);
                    continue;
                }
                else{
                    let i=0;
                    for(let obj of arr){
                        if(obj.c==c){
                            obj.n+=1;
                            break;
                        }
                        if(i==arr.length-1){
                            if(obj.c!=c){
                                obj={c:c,n:1};
                                arr.push(obj);
                                break;
                            }
                        }
                        i++;
                    }
                }
            }
        }
        return arr;
    }
    return main();
}
module.exports = anagrams;
