"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToGroceryStore = addToGroceryStore;
exports.clearList = clearList;
exports.toggleGroceryCompleteness = toggleGroceryCompleteness;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ChallengeGroceryListPart4Dispatcher = require("./05-Challenge-GroceryList-part4-dispatcher");

var _ChallengeGroceryListPart4Dispatcher2 = _interopRequireDefault(_ChallengeGroceryListPart4Dispatcher);

function addToGroceryStore(item) {
  _ChallengeGroceryListPart4Dispatcher2["default"].dispatch({
    type: "ADD_GROCERY",
    item: item
  });
}

function clearList() {
  _ChallengeGroceryListPart4Dispatcher2["default"].dispatch({
    type: "CLEAR_GROCERY"
  });
}

function toggleGroceryCompleteness(groceryIndex) {
  _ChallengeGroceryListPart4Dispatcher2["default"].dispatch({
    type: "TOGGLE_COMPLETENESS",
    groceryIndex: groceryIndex
  });
}