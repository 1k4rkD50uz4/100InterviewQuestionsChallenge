// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {}

module.exports = capitalize;
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const formatStr = s => s.match(/\w+\b/g);
    let i = 0, arr = formatStr(str),
        s;
    for (let w of arr) {
        if (i == 0) {
            s = '';
        }
        else {
            s += ' ';
        }
        i++;
        let j = 0;
        for (let c of w) {
            if (j == 0) {
                c = c.toUpperCase();
            }
            s += c;
            j++;
        }
    }
    return s;
}
module.exports = capitalize;