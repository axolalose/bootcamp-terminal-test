let assert = require("assert")
let cape = require("../isFromCapeTown.js")

describe("isFromCapeTown function",function(){
    it("Should return false if registration not from Cape Town  ",function(){
        assert.equal(cape("CY 123"),false)
    })
    it("Should return true if registration is from Cape Town  ",function(){
        assert.equal(cape("CA 123"),true)
    })
})