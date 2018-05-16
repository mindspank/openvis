import data from './data/openvis.js'
import picasso from 'picasso.js'

let chart = picasso.chart({
    element: document.querySelector('#container'),
    data: data.stacked,
    settings: {
      collections: [{
        key: 'stacked',
        data: {
          extract: {
            field: 'Month',
            props: {
              series: { field: 'Year' },
              end: { field: 'Sales' }
            }
          },
          stack: {
              stackKey: d => d.value,
            value: d => d.end.value
          }
        }
      }],
      scales: {
        y: {
          data: {
            collection: {
              key: 'stacked'
            }
          },
          invert: true,
          expand: 0.2,
          min: 0
        },
        x: { data: { extract: { field: 'Month' } }, padding: 0.3 },
        color: { data: { extract: { field: 'Year' } }, type: 'color' }
      },
      components: [{
        type: 'axis',
        dock: 'right',
        scale: 'y'
      },{
        type: 'axis',
        dock: 'bottom',
        scale: 'x'
      }, {
        type: 'legend-cat',
        scale: 'color',
        dock: 'top'
      },{
        type: 'box',
        data: {
          collection: 'stacked'
        },
        settings: {
          major: { scale: 'x' },
          minor: { scale: 'y', ref: 'end' },
          box: {
            fill: { scale: 'color', ref: 'series' }
          }
        }
      }]
    }
  })