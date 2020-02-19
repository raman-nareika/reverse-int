module.exports = function reverse (n) {
    n = Math.abs(n);
     let reversed = 0;
     
     while (n) {
        reversed = reversed*10;
        reversed = reversed + (n % 10);
        n = Math.floor(n/10);
     }

     return reversed;
}
