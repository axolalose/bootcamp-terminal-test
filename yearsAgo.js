module.exports = function yearsAgo(year) {
    console.log(year)
    var current = new Date();
    var today = current.getFullYear();
    console.log(today)
    var later = today - year ;
    return later;
  }