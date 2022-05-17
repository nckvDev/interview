const languages = ['Java', 'C#', 'Python', 'Ruby']
/* No 👀 */
console.log( languages.findIndex((lang) => lang === 'Python'))
/* yes 🔥 */
console.log(languages.indexOf('Python')) 

const arr = ['A', 'B', 'C']

console.log(arr[arr.length - 1])

/* yes 🔥 */
const country = 'Thailand'
const mapping = {
  Thailand: 'Bangkok',
  Argentina: 'Buenos Aires',
  Armenia: 'Yerevan',
}
const capitalCity = mapping[country]

/* cool 😎 */ 
const countrys = 'Argentina'
const capitalCitys = {
    Thailand: 'Bangkok',
    Argentina: 'Buenos Aires',
    Armenia: 'Yerevan',
  }[countrys]

console.log(capitalCitys)

const strings = "hello"

const usingSplit = strings.split('')
const usingSpead = {...strings}
const usingArrayFrom = Array.from(strings)
const usingObjectAssign = Object.assign(strings)

console.log('strings', strings)
console.log('usingSplit', usingSplit.reverse().join(''))
console.log('usingSpead', usingSpead)
console.log('usingArrayFrom', usingArrayFrom)
console.log('usingObjectAssign', usingObjectAssign)