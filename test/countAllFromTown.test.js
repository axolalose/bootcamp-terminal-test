let assert = require("assert");
let Town = require("../countAllFromTown");

describe("countAllFromTown function",function(){
    it("Should return all the registration numbers in the string that is for that Town  ",function(){
        assert.deepEqual(Town("CS 123"),'CY 123, CS 123')
    })
    it("Should return all registration from Town",function(){ 
        assert.deepEqual(Town("CS 123"),'CY 123, CS 123')
    })
})
