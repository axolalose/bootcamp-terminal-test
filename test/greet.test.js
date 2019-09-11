let assert = require("assert")
let greet = require("../greet.js")

describe("Greet function",function(){
    it("Should return 'Hello, Janine' with an input of 'Janine' ",function(){
        assert.equal(greet("Janine"),"Hello, Janine")
    })
})