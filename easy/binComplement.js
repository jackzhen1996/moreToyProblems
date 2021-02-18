/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let n = N.toString(2).split('');
    for (var i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            n[i] = '0';
        } else {
            n[i] = '1';
        }
    }

    return parseInt(n.join(''),2);
};
