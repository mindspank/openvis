## openvis picasso.js workshop  

### Installation
Clone the repository to your local machine and run `npm install`

### Building
webpack is configured with a dev server running on port 9000.  
To start the devserver open a terminal and run `npm run start`, open a browser and navigate to http://localhost:9000 to view the page

`index.js` is the javascript entry point and `index.ejs` is the html template used. These are configurable in the webpack config located in the `webpack.config.js` file.

### Data
Some sample data are included and located in the `data` directory and exposed as a ES6 module

### Examples
Examples are included in the `exampled` direcory. Note that these are not part of the build system and has to be manually included if you wish to build them.