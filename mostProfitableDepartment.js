module.exports = function mostProfitableDepartment(shop) {
    //console.log(shop);
    var map = {};
    var sale = 0;
    var dep = "";
    for (var i=0; i<shop.length; i++){
      let department = shop[i].department
      let sales = shop[i].sales
      if (sales > sale) {
        dep = department;
        sale = sales;
      }
    }
 
    return (dep);
  }

  