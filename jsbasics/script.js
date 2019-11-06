console.log("sveika pasaule");

var nosaukums = "mans nosaukums";
console.log(nosaukums); //mans nosaukums

console.log(typeof nosaukums); //string

nosaukums = 8;
console.log(nosaukums); //8
console.log(typeof nosaukums); //number

// console.log(Nosaukums); //ERROR

// const skolasNosaukums = "Riga coding school";
// const skolas_nosaukums = "Riga coding school";

// skolasNosaukums = "Rīgas programmēšanas skola"; //ERROR
// console.log(skolasNosaukums);

var a;
console.log(a); //undefined
a = 7;
var b = a;
// alert(b);

q = 1;
var w = 2;
var e = "I'm string";

// w = q
console.log(w);

q = q + w; //3
w = w + w; //4
q = q + 1; //4

var z = "6";
console.log(z + 1); //61
console.log(z - 1); //5

console.log(33 * 2); //66
console.log(44 / 2); //22
console.log(33 / 2); //16.5
console.log(1 / 3);

console.log(33 % 4); //1

var condition = false;

// 4>5

if (condition) {
  console.log("condition is true");
}

if (!condition) {
  //reverse of condition
  console.log("condition is false");
}

if (condition) {
  console.log("IFELSE - condition is true");
} else {
  console.log("IFELSE this is false");
}

var my_variable = 5;
var my_second_variable = 10;

if (my_variable > my_second_variable) {
  console.log("YES");
} else if (my_variable == my_second_variable) {
  console.log("Equal");
} else if (my_variable < my_second_variable) {
  console.log("No");
}

// NaN undefined null 0 //

var mynumber = 28;

switch (mynumber) {
  case 30:
    console.log("trīsdesmit");
    break;
  case 29:
    console.log("divdesmit deviņi");
    break;
  default:
    console.log("Nav neviens");
    break;
}

//loops

// i++ == i+1

for (var i = 0; i < 5; i = i + 1) {
  console.log("i=" + i);
}

//two dimensional loops

for (var i = 0; i < 5; i = i + 1) {
  for (var j = 5; j > 0; j--) {
    if (j == 3) {
      continue;
    }
    console.log("i=" + i + "; j=" + j);
  }
}

//break if j == 3

//while loops

var number = 5;
while (number < 10) {
  number++;
  console.log(number);
}

//do while loop

var dowhilenumber = 10;
do {
  console.log(dowhilenumber);
  dowhilenumber++;
} while (dowhilenumber < 5);

var mansObjekts = [
  { name: "Rolands", link: "google.com" },
  { name: "Jānis", link: "janis.com" }
];

for (i = 0; i < mansObjekts.length; i++) {
  console.log(mansObjekts[i].name);
}

var a = 5;
console.log(a);
var b = a;
a = 12;
console.log(b); //5;

var array = [1, 2, 3];
console.log(array);
console.log(typeof array);

var arrayB = array;
array.push(4);
console.log(array);
console.log(arrayB);

array = ["a", "b"];
console.log(array);
console.log(arrayB);

var test = "global";
console.log(test);

function funNosaukums() {
  console.log(test);
}

function funkNosaukums() {
  var test = "local";
  console.log(test);
}

funkNosaukums();
funNosaukums();
