import dispatcher from "./05-Challenge-GroceryList-part4-dispatcher";

export function addToGroceryStore(item) {
  dispatcher.dispatch({
    type: "ADD_GROCERY",
    item
  })
}

export function clearList() {
  dispatcher.dispatch({
    type: "CLEAR_GROCERY"
  })
}

export function toggleGroceryCompleteness(groceryIndex)  {
  dispatcher.dispatch({
    type: "TOGGLE_COMPLETENESS",
    groceryIndex
  })
}
