module.exports = function findItemsOver20(items) {
    let products = [];  
    for (var i=0; i < items.length; i++){
      let current = items[i];    
      if(current.qty  > 20) {
            products.push(current);
        }  
      }
    return (products);
  }
