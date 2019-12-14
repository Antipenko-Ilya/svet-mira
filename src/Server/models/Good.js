const Sequelize = require('sequelize');
const { Model } = Sequelize;
const { sequelize } = require('../init.js');

class Good extends Model {}

Good.init({
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    Name: {
        type:Sequelize.STRING
    },
    price: {
        type:Sequelize.NUMBER
    },
    article: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    brand: {
        type:Sequelize.STRING
    },
    amount: {
        type:Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    sale: {
      type: Sequelize.BOOLEAN
    },
    price: {
      type: Sequelize.NUMBER
    },
    height: {
      type: Sequelize.NUMBER
    },
    diameter: {
      type: Sequelize.NUMBER
    },
    // cap_type: {
    //   type: Sequelize.STRING
    // },
    amount_of_lamps: {
      type: Sequelize.NUMBER
    },
    lamp_power: {
        type: Sequelize.NUMBER
    },
    material: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    }
}, {
  // modelName: 'good',
  timestamps: false,
  // paranoid: true,
  // underscored: true,
  freezeTableName: true,
  tableName: 'goods',
  sequelize,
});

module.exports = {
  Good
};
