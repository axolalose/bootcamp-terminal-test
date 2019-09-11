let assert = require("assert")
let from = require("../countAllPaarl")

describe("countAllPaarl function",function(){
    it("Should return 1 as there is only 1 number plate in the string from Paarl",function(){
        assert.equal(from("CJ 123"),1)
    })
    it("Should return 0 as there are no number plates in the string from Paarl",function(){
        assert.equal(from("CS 123"),0)
    })
})
