import data from './data.json'

const allCategories = data.map( (item) => item.category )
// console.log(allCategories)

const categoriesSet = new Set(allCategories)
const categoriesUnique = Array.from(categoriesSet)
console.log(categoriesUnique)

export { 
    allCategories
}




export default data 