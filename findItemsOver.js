module.exports = function findItemsOver(items,threshold) {
    var products = [];
    var higher = [];
    for (var i=0; i < items.length; i++){
      let current = items[i];
      if(current.qty > threshold){
       products.push(current);
      }
    }
    return (products);
  }