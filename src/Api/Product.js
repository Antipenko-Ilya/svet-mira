const data = require('../Data/Data.json');

console.log( data );

function loadProduct() {
    return new Promise(function(res, rej){
        setTimeout(() => {
            res(data);
        }, 1000);
    });
}