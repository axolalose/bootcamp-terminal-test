let assert = require("assert")
let week = require("../isWeekday.js")

describe("isWeekday function",function(){
    it("Should return true if Mon.includes from Monday",function(){
        assert.equal(week("Monday"),true)
    })
    it("Should return false if Sunday.includes not from Monday",function(){
        assert.equal(week("Sunday"),false)
    })
})