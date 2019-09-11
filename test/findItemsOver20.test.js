let assert = require("assert")
let over = require("../findItemsOver20.js")

// var results = findItemsOver20(items)

var items = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];

describe("findItemsOver20 function",function(){
    it("Should return all the products that have a quantity higher than 20",function(){
        assert.deepEqual(over([{name:"pear", qty:21}, {name:"pear", qty:11}]), [ { name: 'pear', qty: 21 } ])
    });


   it("Should return 20 if the items are found over 20 ",function(){
        assert.deepEqual(over([{name:"pear", qty:21}, {name:"pear", qty:11}]), [ { name: 'pear', qty: 21 } ])
    });
});