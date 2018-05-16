import data from './data/openvis.js'
import picasso from 'picasso.js'

let chart = picasso.chart({
    element: document.querySelector('#container'),
    data: data.barchart,
    settings: {
      scales: {
        sales: {
          data: { field: 'Sales' },
          invert: true,
          include: [0]
        },
        month: {
          data: { extract: { field: 'Month' } },
          padding: 0.3
        },
        color: {
          data: { field: 'Sales'},
          type: 'color'
        }
      },
      components: [
        {
          type: 'axis',
          dock: 'left',
          scale: 'sales'
        },
        {
          type: 'axis',
          dock: 'bottom',
          scale: 'month'
        },
        {
          type: "box",
          data: {
            extract: {
              field: "Month",
              props: {
                start: 0,
                end: { field: "Sales" }
              }
            }
          },
          settings: {
            major: { scale: "month" },
            minor: { scale: "sales" },
            box: {
              fill: { scale: 'color', ref: 'end' }
            }
          },
          brush: {
            trigger: [{
              on: 'tap',
              contexts: ['highlight'],
            }],
            consume: [{
              context: 'highlight',
              style: {
                inactive: {
                  opacity: 0.3,
                }
              }
            }]
          }
        }
      ]
    }
  });
  