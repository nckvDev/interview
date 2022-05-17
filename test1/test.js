const languages = ['Java', 'C#', 'Python', 'Ruby']

console.log('first', languages.indexOf('Python')) 

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
// Testing
const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(arrs));

const getUnique = (arr) => [...new Set(arr)];
// Testing
const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5];
console.log(getUnique(arr));

const generateRandomHexColor = () => `#$ {Math.floor (Math.random () * Oxffffff).toString(16) }`;
console.log('gen', generateRandomHexColor)


// Nullish Coalescing Operator
const obj = {
    name:{
        firstName: 'Neelesh',
        lastName: 'Arora'
    },
    address:{
        pin: 'Neelesh',
        number: 'Arora'
    }
}
console.log('name', obj?.name ?? `Name doesn't exist`) 