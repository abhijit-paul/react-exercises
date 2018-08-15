import { EventEmitter } from "events";
import dispatcher from "./05-Challenge-GroceryList-part4-dispatcher";

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

    handleActions(action) {
      switch(action.type) {
        case "ADD_GROCERY": {
          this.addGroceryItem(action.item);
          break;
        }
        case "CLEAR_GROCERY": {
          this.clearList();
          break;
        }
        case "TOGGLE_COMPLETENESS": {
          this.toggleGroceryCompleteness(action.groceryIndex);
          break;
        }
        default: {
          console.error("UnIdentified action");
        }
      }
    }

};

const groceryStore = new GroceryStore();

dispatcher.register(groceryStore.handleActions.bind(groceryStore));

export default groceryStore;
