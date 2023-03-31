console.log("                    zero                   ")

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('                    one                   ')


vegetables.pop()
console.log("vegetables: ", vegetables);

console.log('                    two                   ')

fruit.shift()
console.log("fruit: ", fruit);

console.log('                    three                   ')

var orange = fruit.indexOf ("orange")
console.log(orange)

console.log('                    four                   ')
fruit.push(orange)
console.log("fruit: ", fruit);

console.log('                    five                   ')

var vegLength = vegetables.length
console.log(vegLength)

console.log('                    six                   ')
vegetables.push(vegLength)
console.log("vegetables: ", vegetables);

console.log('                    seven                   ')

var food = fruit.concat(vegetables)
console.log("food", food)
console.log('                    eight                   ')
var cutfood = food.splice(4 , 2 )
console.log("food", food)
console.log('                    nine                   ')

var reverseFood = food.reverse()    
console.log("food", food)
console.log('                    ten                   ')
var stringFood = food.join(", ")
console.log("food", stringFood)

