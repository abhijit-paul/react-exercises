import { EventEmitter } from "events";

class GroceryStore extends EventEmitter {
    constructor() {
      super();
      this.groceryItems = [
        {
          name: "Apples",
          completed: false
        }
      ];
    }

    getAll()  {
      return this.groceryItems;
    }

    addGroceryItem(item)  {
      this.groceryItems.push({
        name: item,
        completed: false
      });
      this.emit("change");
    }

    clearList() {
      this.groceryItems = [];
      this.emit("change");
    }

    toggleGroceryCompleteness(groceryIndex) {
      this.groceryItems[groceryIndex].completed = !this.groceryItems[groceryIndex].completed;
      this.emit("change");
    }
};

const groceryStore = new GroceryStore();

export default groceryStore;
