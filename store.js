class Store {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.userId = ''
        this.groceryItems = []
    }

    addGroceryItem(name, quantity, price) {
        // validate the hobby so that you are not adding duplicates
        this.groceryItems.push(name, quantity, price)
    }
}