var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day2.txt')
});

var total = 0;
var ribbon = 0;
var count = 0;
console.log("Starting day 2...")

lineReader.on('line', function (line) {
    count++;
  var inputArr = line.split('x');
  inputArr = inputArr.map(item =>{
      return parseInt(item)
  })
  inputArr = inputArr.sort((a, b) =>{
      if(a < b){return -1}
      if(b < a){return 1}
      if(a == b) return 0;
  })
  var min = 999;
  var side1 = (inputArr[0] * inputArr[1])
  var side2 = (inputArr[1] * inputArr[2])
  var side3 = (inputArr[0] * inputArr[2])
  min = side1;
  total += ((side1 * 2) + (side2 *2) + (side3 *2) + min);
  ribbon += (inputArr[0] + inputArr[0] + inputArr[1] + inputArr[1]) + (inputArr[0] * inputArr[1] * inputArr[2]);
  console.log("Total square footage of wrapping paper needed: " + total + ', count = ' + count, 'ribbon = ' + ribbon)
})


