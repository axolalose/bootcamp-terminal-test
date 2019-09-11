let assert = require("assert")
let bellvile = require("../isFromBellville.js")

describe("isFromBellville function",function(){
    it("Should return true if registration from Bellville  ",function(){
        assert.equal(bellvile("CY 123"),true)
    })
    it("Should return false if registration not from Bellville  ",function(){
        assert.equal(bellvile("CS 123"),false)
    })
})