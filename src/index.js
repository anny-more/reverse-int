module.exports = function reverse (n) {
    const str = Math.abs(n).toString();
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
         result = `${str[i]}${result}`;
    }
    return Number(result);
}
