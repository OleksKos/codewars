/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.*/
function count(string) {
  // The function code should be here
  let counter = 0;
  let user = {};
  const chars = string.split('');
  console.log(chars)
  for (let i = 0; i < chars.length; i++) {
    const element = chars[i];
    if (element === 0) {
      continue;
    }
    for (let index = i; index < chars.length; index++) {
      if (element === chars[index]) {
        chars[index] = 0;
        counter++;
        user[element] = counter;
      }
    }
    counter = 0;
  }
  return user;
}

console.log(count('ababa'));

//Solves
//1st
function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
//2d
function count(string) {
  return string.split('').reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

//Codewars
//Arrays
let myBackground = document.querySelector('.my_gradinent_background');
if (myBackground) {
  myBackground.style.backgroundImage = "linear-gradient(180deg,rgba(0,0,0,0) 72%,#e0d2c8 49%)";
}