// Differentiate between a for loop, for each and map in JavaScript. 
// Provide code examples to better illustrate your case.

// LOOPING THROUGH A VARIABLE, 
// ITS LOOPS THROUGH THE STARTING INDEX TO THE END INDEX WITH INCREMENT TWO
for(let index = 0; index < 10; index += 2) {
	console.log(`${index}`)
}

// FETCHING DATA FROM AN ARRAY
const items = ['Sneakers', 'Benz', 'X-Box', 'Mansion', 'Landed Properties']
items.forEach(item => console.log(item))


// FETCHING DATA FROM AN ARRAY, TRANSFORMS THE DATAS
items.map(item => {
	item = item.charAt(2).toUpperCase()
	console.log(item)
})

// codepenLink = https://codepen.io/prof80/pen/eYORqNE