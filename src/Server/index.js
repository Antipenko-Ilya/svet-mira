const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const qs = require('query-string');
const Sequelize = require('sequelize');
const { sequelize } = require('./init.js');
const { Good } = require('./models/Good.js');

const app = express();

app.use(bodyParser());
app.use(cors());

// const params = qs.parse(query);
app.get('/goods', (req, res) => {
  const { query } = req;
  const { brand, type, priceFrom = -Infinity, priceTo = Infinity } = query;
  console.log('----------------------->', Sequelize.Op);
  sequelize.sync().then(function() {
    // order: query && [[query.column, query.order]],
    return Good.findAll({
      where: {
        brand,
        type
        // price: {
        //   [Sequelize.Op.between]: [priceFrom, priceTo]
        // }
      }
    });
  }).then(function(jane) {
    res.status(200).json(jane);
  }).catch((e) => {
    console.log(e);
    res.status(501).send(e);
  });
});
// nodemon
// http://localhost:3366/goods?column=Name&order=desc
// http://localhost:3366/goods?column=Name&order=asc
app.listen(3366, () => console.log(`Example app listening on port 3366!`));

// Request URL: https://market.yandex.ru/api/search?glfilter=7893318%3A152870%2C10796752%2C152987&glfilter=15161366%3A15161369%2C15161370&glfilter=15164148%3A15164157%2C15164156&onstock=1&local-offers-first=0&pricefrom=123&priceto=666666&hid=91491&nid=54726&cvredirect=0&refererPageId=list

// type = chandelier | null
// brand
// pricefrom
// priceto
// sale



// glfilter: 7893318:152870,10796752,152987
// glfilter: 15161366:15161369,15161370
// glfilter: 15164148:15164157,15164156
// onstock: 1
// local-offers-first: 0
// pricefrom: 123
// priceto: 666666
// hid: 91491
// nid: 54726
// cvredirect: 0
// refererPageId: list
