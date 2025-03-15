const sequelize = require('sequelize');

import database from '../db';

// const schema = '';

class Product extends sequelize.Model{};

Product.init(
    {
        Id : 
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        Description: 
        {
            type: sequelize.STRING,
            allowNull: true,
        },

        CreationDate:
        {
            type: sequelize.DATE,
            allowNull: false,
        },

        UpdateDate:
        {
            type: sequelize.DATE,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName:'tbProduct'
    }
)

module.exports = Product;