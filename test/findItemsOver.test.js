let assert = require("assert")
let over = require("../findItemsOver")

describe("findItemsOver function",function(){
    it("Should return all the products that have a quantity higher than 20",function(){
    assert.deepEqual(over([ { name: 'pear', qty: 21 }] ,20), [ { name: 'pear', qty: 21 } ])
    })
    it("Should return an empty array if the is no product that is lower than 20",function(){
        assert.deepEqual(over([ { name: 'pear', qty: 15 }] ,20), [])
        }) 
})


  