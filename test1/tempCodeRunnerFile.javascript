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