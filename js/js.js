// alert('one')
//alert('hhhh');
// var mas=[3, 6, 1, 13, 88, 43];
// mas[0]=7;
// mas[1]=9;
// mas.push(2017);
// mas.push(888, 999, 444);
// console.log(mas);

var p=document.getElementById('out');
for (var i = 4; i <401; i++) {
	p.innerHTML +=i+' ';
}

var p=document.getElementById('out1');
for (var i = 0; i < 20; i++) {
  if (i == 3) continue;
  //alert(i);
  p.innerHTML +=i+' ';
}
// var p=document.getElementById('out1');
// for (var i = 0; i <401; i++) {
// 	p.innerHTML +=i+' ';
// }
var p=document.getElementById('out3');
for (var i = 653; i >-1; i--) {
	p.innerHTML +=i+' ';
}
var p=document.getElementById('out4');
for (var i = 1987; i <2018; i++) {
	p.innerHTML +=i+' ';
}


// var i = 4;
// while (i < 400) {
//   console.log( i );
//   i++;
// }

var p=document.getElementById('mas1');
var mas=[3, 6, 1, 13, 88, 43];

console.log(mas[0]);
console.log(mas[3]);



var p=document.getElementById('mas3');
var mas=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var i = 0; i < mas.length; i++) {

	console.log(mas[i]);
};

var p=document.getElementById('mas3');
var mas=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

mas[3] = 'new element';

console.log(mas);

var p=document.getElementById('mas3');
var mas=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

mas[2] = 22;
mas[4] = 44;

console.log(mas);


