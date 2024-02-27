// const fs=require('fs')
// const first=fs.readFileSync('.\content\first.txt','utf8')
// const second=fs.readFileSync('C:\Users\PeeKay\OneDrive\Desktop\node_tutorial\content\second.txt','utf8')
// console.log(first,second)

const fs = require('fs');

const first = fs.readFileSync('C:/Users/PeeKay/OneDrive/Desktop/node_tutorial/content/first--1.txt', 'utf8');
const second = fs.readFileSync('C:/Users/PeeKay/OneDrive/Desktop/node_tutorial/content/second.txt', 'utf8');

console.log( first,second);
fs.writeFileSync('./content/result.txt',`this is results ${first} ${second}`,{flag:'a'})

