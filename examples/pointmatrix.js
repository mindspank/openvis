import data from './data/openvis.js'
import picasso from 'picasso.js'

let chart = picasso.chart({
    element: document.querySelector('#container'),
    data: data.points,
      settings: {
      scales: {
        years: {
          data: {
            extract: { field: 'Year' }
          }
        },
        months: {
          data: {
            extract: { field: 'Month' }
          }
        },
        sales: {
          data: {
            field: 'Sales'
          }
        },
        color: {
          data: { field: 'Sales' },
          type: 'color'
        }
      },
      components: [{
        key: 'y-axis',
        type: 'axis',
        scale: 'years',
        dock: 'left'
      }, {
        key: 'x-axis',
        type: 'axis',
        scale: 'months',
        dock: 'bottom'
      }, {
        type: 'point',
        data: {
          extract: {
            field: 'Month',
            props: {
              size: { field: 'Sales' },
              group: { field: 'Year' }
            }
          }
        },
        settings: {
          x: { scale: 'months' },
          y: { scale: 'years', ref: 'group' },
          size: { scale: 'sales' },
          fill: { scale: 'color', ref: 'size' }
        }
      }]
    }
  })