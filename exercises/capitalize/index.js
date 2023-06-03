// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
//   capitalize('hi there, how is it going?') --> 'Hi There, How Is It Going?'

function capitalize(str) {
    let delim=' ';
    return str
        .split(delim)
        .map(w=>{
            let i=0;
            return w[i++].toUpperCase()+w.substring(i);
        })
        .join(delim);
}
module.exports = capitalize;