//Bài 1
// let a = Number(prompt('Input a:'));
// let b = Number(prompt('Input b:'));

// function total(a, b) {
//     return a + b;
// }
// console.log(total(a, b));

//Bài 2
// arr = [1, 2, 3, 4, 5, 6];
// let a = 0;

// function total(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             a += arr[i];
//         }
//     }
//     console.log(a)
// }

// total(arr);


//Bài 3
// let squared = Number(prompt('Input number: '));

// function squaredNumber(n){
//     return n**2;
// }

// console.log(squaredNumber(squared))


// Bài 4:

// function s(radi) {
//     let s = 0;
//     return s = 3.14 * (radi ** 2);
// }
// function c(radi) {
//     let c = 0;
//     return c = 2 * 3.14 * radi;

// }
// let number = prompt('input number');
// console.log(s(number))
// console.log(c(number))


//Bài 4:
// let number = Number(prompt('Nhap so: '));
// function gt(number) {
//     let a = 1;
//     for (let i = number; i > 0; i--) {
//         a = a * i;
//     }
//     return a;
// }
// console.log(gt(number));


//Bài 5
// let a = Number(prompt('Nhap a: '));
// function check(a) {
//     if (a === Number(a)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check(a));


//Bài 6
// let InputSND = Number(prompt('Nhap so:'));
// function check(snd){
//     if(parseInt(snd) > 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(check(InputSND));

//Bài 7
// let a = prompt('Input a');
// let b = prompt('Input b');
// function swap(a, b) {
//     let temp;
//     temp = 0;
//     temp = a;
//     a = b
//     b = temp;
//     return [a, b];
// }
// console.log(swap(a, b));

//Bai 8
// function swapArray(number) {
//     let a = [];
//     for (let i = number.length - 1; i >= 0; i--) {
//         a.push(number[i]);
//     }
//     console.log(a)

// }
// let number = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 1000];
// swapArray(number);

//Bai 9
// let inputArray = prompt('Enter input anythings:').split('');
// let inputCheck = prompt('Enter a string search: ');
// function check(input) {
//     let a = 0;
//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] === inputCheck) {
//             a += 1;
//         }
//     }
//     if (a > 0) {
//         return `${a}`;
//     } else {
//         return '-1';
//     }
// }

// console.log(check(inputCheck));
