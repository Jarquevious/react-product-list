import data from './data.json'

const allCategories = data.map( (item) => item.category )
console.log(allCategories)

export { 
    allCategories
}




export default data 