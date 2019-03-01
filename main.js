/*
1. You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.
2. The object should have a property named orders that is an array. You will need to define this.
3. Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
4 .Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
5. Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
*/

const restaurant = {
    name: "Bob's Burgers",
    orders: [],                     //empty array to hold orders
    placeOrder: function (meal) {   //placeOrder method with argument meal
        this.orders.push(meal)      //push the value of meal to restaraunt.orders using "this" which references the object
    },
    getOrders: function () {         //invoke getOrders and return the value of this.orders, the array
        return this.orders
    }
}

const chickenComboMeal = {  // object with properties
    sandwichType: "chicken",    //key and string
    fries: true,            //key and boolean
    drinkSize: "medium"     //key and string
}
const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal) //invoke the placeOrder method in the restaraunt object, passing chickenComboMeal as the argument
restaurant.placeOrder(burgerComboMeal)

// Invoke the function to return the list of all orders
// Output all orders to the console using console.table()
console.table(restaurant.getOrders()) //console.table the value of the invokation of getOrders method inside the restaraunt object