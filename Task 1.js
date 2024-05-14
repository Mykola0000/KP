
let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100)); 
}


console.log("Початковий масив:", array);


array.sort(function(a, b) {
    return b - a;
});


console.log("Відсортований масив за спаданням:", array);
