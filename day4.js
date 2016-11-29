var input = 'ckczppom';
var num = 0;
var count = 0;
var md5 = require('md5');

var message = input + count.toString();
var hash = md5(message);

while(!hash.startsWith('00000')){ //Change for 5 or six zeros
    num++;
    count++;
    var message = input + count.toString();
    var hash = md5(message);
}

console.log('Found hash! Using: ' + message + ', ' + hash);

while(!hash.startsWith('000000')){ //Change for 5 or six zeros
    num++;
    count++;
    var message = input + count.toString();
    var hash = md5(message);
}

console.log('Found hash! Using: ' + message + ', ' + hash);