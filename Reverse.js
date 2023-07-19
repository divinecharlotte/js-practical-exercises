// If you have a string like "I am the good boy". How can you generate 
// "I ma eht doog yob"? Please note that the words are in place but 
// reversed.
let text = "I am the good boy"
let splittedString = text.split(' ')
let newText = splittedString.map(str => str.split('').reverse().join(''))

result = newText.join(' ')
console.log(result);

