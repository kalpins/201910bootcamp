var masivs = [1, 2, 3];
console.log(masivs.length);

console.log(masivs[1]);

masivs[1] = 100;

masivs[3] = 4;

masivs[5] = 60;
console.log(masivs);


masivs.forEach(function (elements) {
    console.log(elements)
})

masivs.pop(); //izdzēš pēdējo elementu;
masivs.shift(); //idzēš pirmo elementu;

masivs.unshift("jauns pirmais elements");

console.log(masivs.indexOf("jauns pirmais elements"));

var jaunsMasivs = masivs.splice(2);
console.log(jaunsMasivs)
console.log(masivs)


masivs.slice(2);
console.log(masivs);


masivs = [1, 2, 3, 4, 5]
console.log(masivs.filter(function (params) {
    return params > 2
}))

console.log(masivs.reverse())

newMasivs = [11, 12, 13];
console.log(masivs.concat(newMasivs))