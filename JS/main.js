//-------map---------------------
// class MyArray {
//     constructor() {
//         this.elements = arguments;
//     }
//     mapC = function (callback) {
//         let result = [];

//         for (let i = 0; i < this.elements.length; i++) {
//             result.push(callback(this.elements[i]))
//         }

//         return result;
//     }
// }
//     let myArr = new MyArray(2, 4, 6, 8, 10, 12, true, "mamed");


// let res = myArr.mapC(x => {
//     return x+4;
// });
// console.log(res)

//---------forEach------------

// class MyArray2 {
//     constructor() {
//         this.elements = arguments;
//     }
//     forEach = function (callback) {
//         let result = [];

//         for (let i = 0; i < this.elements.length; i++) {
//             result.push(callback(this.elements[i]))
//         }

//         return result;
//     }
// }
//     let myArr = new MyArray2(2, 4, 6, 8, 10, 12, true, "mamed");


// let res = myArr.forEach(x => {
//     return x>1;
// });
// console.log(res)



//--------filter----------------


// class MyArray3 {
//     constructor() {
//         this.elements = arguments;
//     }
//    filter = function (callback) {
//         let result = [];

//         for (let i = 0; i < this.elements.length; i++) {
//             if (callback(this.elements[i])) {
//                 result.push(this.elements[i])
//             }
//         }

//         return result;
//     }
// }
//     let myArr = new MyArray3(2, 4, 6, 8, 10, 12, true, "mamed");


// let res = myArr.filter(x => {
//     return x>2;
// });
// console.log(res)

//---------every----------


// class MyArray4 {
//     constructor() {
//         this.elements = arguments;
//     }
//    every = function (callback) {
//         let result = [];

//         for (let i = 0; i < this.elements.length; i++) {
          
//                 result.push(callback(this.elements[i]))
            
//         }

//         return result;
//     }
// }
//     let myArr = new MyArray4(2, 4, 6, 8, 10, 12, true, "mamed");


// let res = myArr.every(x => {
//     return x>2;
// });
// console.log(res)




// class MyArray4 {
//     constructor() {
//         this.elements = arguments;
//     }
//    IndexOf = function (callback) {
//         let result = [];

//         for (let i = 0; i < this.elements.length; i++) {
          
//             if (callback(this.elements[i])) {
//              result.push(this.elements[i])
//         }
            
//         }

//         return result;
//     }
// }
//     let myArr = new MyArray4(2, 4, 6, 8, 10, 12, true, "mamed");


// let res = myArr.IndexOf("mamed");
// console.log(res)


