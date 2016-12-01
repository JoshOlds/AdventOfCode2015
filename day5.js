var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day5.txt')
});

var nice = 0;
var bad = 0;

lineReader.on('line', function (line) {

    var vowels = checkVowels(line);
    var repeats = checkRepeat(line);
    var illegals = checkIllegals(line);

    if(vowels >= 3  && repeats > 0 && illegals < 1){
        nice++;
    }else{
        bad++;
    }

    console.log(`Nice: ${nice}, Bad: ${bad}`)
})



function checkVowels(input) {
    var inputArr = input.split('');
    var vowels = 0;
    inputArr.forEach(item => {
        if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u') {
            vowels++;
        }
    })
    return vowels;
}

function checkRepeat(input) {
    var inputArr = input.split('');
    var repeats = 0;
    inputArr.forEach((item, index) => {
        if (index < (inputArr.length - 1)) {
            if (item == inputArr[index + 1]) {
                repeats++;
            }
        }
    })
    return repeats;
}

function checkIllegals(input) {
    var illegals = 0;
    if(input.includes('ab')){
        illegals++;
    }
    if(input.includes('cd')){
        illegals++;
    }
    if(input.includes('pq')){
        illegals++;
    }
    if(input.includes('xy')){
        illegals++;
    }
    return illegals;
}