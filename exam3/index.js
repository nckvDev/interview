/* 3. หาตำแหน่ง location */
let str = "Please locate where 'locate' occurs!";

console.log('str', str.indexOf('locate'))

/* 4. เพิ่ม react */
let qvault = ["the", "best", "coding", "courses", "ever", "like", "totally"];
let text = "react"

qvault.push(text)
console.log('qvault', qvault)

/* 5. หาเลขคู่ */
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var data = []

data.push(...arr.filter((value) => value % 2 === 0 ))
console.log('data', data)

/* 6. */
let number = [300, 234, 590, 134, 56, 99, 350, 149];
let number2 = [14, 55, 755, 34, 20, 458, 243, 12, 500];
let numberArray = [];
let dataNumber = [];

/* 6.1 เรียกข้อมูลจากน้อยไปมาก number number2 */
// const number3 = number.push(...number2)
numberArray.push(...number, ...number2)
numberArray.sort((a, b) => a - b)
console.log('numberArray', numberArray)

/* 6.2 ที่หาร 5 ลงตัว เรียงมากไปน้อย */
dataNumber = numberArray.sort((a, b) => b - a).filter((value) => value % 5 === 0)
console.log('dataNumber', dataNumber)