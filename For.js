var array = ['a', 'b', 'c'];
for (var i = 0; i < array.length; i++) {
//console.log(`indice ${i+1}= `+array[i]);
}

//Changing the increment
for (var i = 0; i < 10; i += 2) {
  //  console.log(i);
}

//FOR ... OF
const iterable = [0, 2, 3];
for (let i of iterable) {
//console.log(i);
}

const names = ['bob', 'alejandro', 'zandra',"bob", 'anna', 'bob'];
const uniqueNames = new Set(names); //A Set object will eliminate duplicates.
for (let name of uniqueNames) {
console.log(name);
}

