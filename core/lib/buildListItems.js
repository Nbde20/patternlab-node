'use strict';

const _ = require('lodash');

module.exports = function(container) {
  //combine all list items into one structure
  const list = [];
  for (const item in container.listitems) {
    if (container.listitems.hasOwnProperty(item)) {
      list.push(container.listitems[item]);
    }
  }
  container.listItemArray = _.shuffle(list);

  for (let i = 1; i <= container.listItemArray.length; i++) {
    const tempItems = [];
    if (i === 1) {
      tempItems.push(container.listItemArray[0]);
      container.listitems['' + i] = tempItems;
    } else {
      for (let c = 1; c <= i; c++) {
        tempItems.push(container.listItemArray[c - 1]);
        container.listitems['' + i] = tempItems;
      }
    }
  }
};