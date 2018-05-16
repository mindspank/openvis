export default {
  scatterplot: [{
    type: 'matrix',
    data: [
      ['Year', 'Month', 'Sales', 'Margin'],
      ['2010', 'Jan', 1106, 7],
      ['2010', 'Feb', 5444, 53],
      ['2010', 'Mar', 147, 64],
      ['2010', 'Apr', 7499, 47],
      ['2010', 'May', 430, 62],
      ['2010', 'June', 9735, 13],
      ['2010', 'July', 7435, 15],
      ['2011', 'Jan', 1482, 45],
      ['2011', 'Feb', 2659, 76],
      ['2011', 'Mar', 1261, 73],
      ['2011', 'Apr', 3085, 56],
      ['2011', 'May', 3035, 91],
      ['2011', 'June', 7691, 88],
      ['2011', 'July', 3012, 81],
      ['2012', 'Jan', 7980, 61],
      ['2012', 'Feb', 2564, 22],
      ['2012', 'Mar', 7957, 98],
      ['2012', 'Apr', 5809, 1],
      ['2012', 'May', 429, 2],
      ['2012', 'June', 6757, 77],
      ['2012', 'July', 9415, 92]
    ]
  }],
  barchart: (function() {
    var arr = [['Month', 'Sales']]
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (var m = 0; m < months.length; m++) {
      arr.push([
        months[m],
        parseFloat((Math.random() * 10000).toFixed(0))
      ])
    }
    return [{
      type: 'matrix',
      data: arr
    }]
  })(),
  stacked: (function() {
    var arr = [['Year', 'Month', 'Sales']]
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    for (var i = 0; i < 6; i++) {
      for (var m = 0; m < months.length; m++) {
        arr.push([
          String(2010 + i),
          months[m],
          parseFloat((Math.random() * 10000).toFixed(0)),
          parseFloat((Math.random() * 100).toFixed(0))]);
      }
    }
    return [{
      type: 'matrix',
      data: arr
    }]
  })(),
  points: (function() {
    var arr = [['Year', 'Month', 'Sales', 'Margin']]
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    for (var i = 0; i < 10; i++) {
      for (var m = 0; m < months.length; m++) {
        arr.push([
          String(2010 + i),
          months[m],
          parseFloat((Math.random() * 10000).toFixed(0)),
          parseFloat((Math.random() * 100).toFixed(0))]);
      }
    }
    return [{
      type: 'matrix',
      data: arr
    }]
  })()
}