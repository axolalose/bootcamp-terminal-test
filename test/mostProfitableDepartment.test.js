let  assert = require("assert")
let most =  require("../mostProfitableDepartment.js")

describe("mostProfitableDepartment function",function(){
    it("Should return 'carpentry' as it has the most in sales ",function(){
        
        var salesData = [
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
            {department: 'carpentry', sales: 1540, day: 'Tuesday'},
            {department: 'hardware', sales: 1500, day: 'Wednesday'},
            {department: 'outdoor', sales: 4507, day: 'Wednesday'},
            {department: 'carpentry', sales: 8009, day: 'Wednesday'},
            {department: 'hardware', sales: 12000, day: 'Thursday'},
            {department: 'outdoor', sales: 2810, day: 'Thursday'},
            {department: 'carpentry', sales: 6109, day: 'Thursday'},
            {department: 'hardware', sales: 7005, day: 'Friday'},
            {department: 'outdoor', sales: 1200, day: 'Friday'},
            {department: 'carpentry', sales: 16109, day: 'Friday'}
        ];
        
        assert.deepEqual(most(salesData),'carpentry')
    });
    it("Should return 'outdoor' as it has the most sales",function(){

        var salesData = [
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
            {department: 'carpentry', sales: 1540, day: 'Tuesday'},
            {department: 'hardware', sales: 1500, day: 'Wednesday'},
            {department: 'outdoor', sales: 8507, day: 'Wednesday'},
            {department: 'carpentry', sales: 8009, day: 'Wednesday'},
            {department: 'hardware', sales: 12000, day: 'Thursday'},
            {department: 'outdoor', sales: 18007, day: 'Thursday'},
            {department: 'carpentry', sales: 6109, day: 'Thursday'},
            {department: 'hardware', sales: 7005, day: 'Friday'},
            {department: 'outdoor', sales: 12006, day: 'Friday'},
            {department: 'carpentry', sales: 16109, day: 'Friday'}
        ];

        assert.deepEqual(most(salesData),'outdoor')
    });
    it("Should return an empty string with no input into the functions parameters",function(){

        var salesData = [];

        assert.deepEqual(most(salesData),'')
    });
});