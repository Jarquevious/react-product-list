// ----------------------------------------------------------------------------------------
//           Challenge 1 - Get the array of products.

//           TASK: Do this by importing the JSON file. 
// ----------------------------------------------------------------------------------------
import data from './data.json'


// ----------------------------------------------------------------------------------------
//           Challenge 2 - Get a list of all categories. 

//           TASK: Inside your data.js module make a list of all of the...
//           ...categories contained in the data. Do this with Array.map(). 
// ----------------------------------------------------------------------------------------

const allCategories = data.map( (item) => item.category )
// console.log(allCategories)

// ----------------------------------------------------------------------------------------
//          Challenge 3 - Make a categories list of unique values.

//          TASK: Create an object where each key is a category name.               
// ----------------------------------------------------------------------------------------
const categoriesObj = allCategories.reduce((obj, category) => {
    obj[category] = 0
    return obj
}, {})
const categoriesUnique = Object.keys(categoriesObj)

// console.log(categoriesUnique)


// ----------------------------------------------------------------------------------------
//          Challenge 4 - Make an Object whose keys are the names of categories and...
//          ...whose values are the number of times that category appears in the data.

//          TASK: check if cat exists as a key on obj;...
//          ...if so add 1 to the value of this... 
//          ...key else set this key with a value of 1
//          !!! Be sure to define the initial value as an Object!
// ----------------------------------------------------------------------------------------
const categoriesWithCounts = data.reduce((obj, category) => {
    if ( category in obj) {
        obj[category] = 1
    } else {
        obj[category] += 1
    }
    return obj
}, [])
console.log(categoriesWithCounts)
// ----------------------------------------------------------------------------------------
//          Challenge 5 - Use Reduce to make an array of objects that have a name and 
//          a count. 

//          Task: Create a list all of the names should 
//          be unique and each should only appear once! 
//          TASK: Create an object where each key is a category name.               
// ----------------------------------------------------------------------------------------
const nameCount = categoriesUnique.reduce((acc, cat) => {
    acc.push({ name: cat, count: categoriesWithCounts[cat] })
    return acc
  }, [])


console.log(nameCount)


export default data 

