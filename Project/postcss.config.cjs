// postcss.config.cjs (rename from postcss.config.js)
// // postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// const autoprefixer = require("autoprefixer");

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
  
};
// module.exports={
//   plugins:{
//     "postcss-import":{},
//     tailwindcss:{},
//     autoprefixer:{},
//   }
// }
