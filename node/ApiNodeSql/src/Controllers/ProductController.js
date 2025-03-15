// const ProductModel = require('../Models/Product')

import ProductModel from '../Models/Product'


module.exports = 
{
    async GetAll(req, res)
    {
        try {
            
            const products = await ModelProduto.findAll();
            return res.status(201).json(products)

        } catch (e) {
            return res.status(400).console.error("Erro:", e)
        }
    },

    async GetById(req, res) {
        try {

            const product = await ProductModel.findByPk(req.body.Id)

            return res.status(201).json(product)
            
        } catch (e) {
            return res.status(400).console.error("Erro:", e)
        }
    },

    async Post(req, res)
    {
        try {
            
            const newProduct = await ModelProduto.create(
                {
                    Id: req.body.Id,
                    Description: req.body.Description,
                    CreationDate: req.body.CreationDate,
                    UpdateData: null
                }
            )
            return res.json(newProduct)

        } catch (e) {
            return res.status(400).console.error("Erro:", e)

        }
    },

    async Put(req, res)
    {
        try {

            const product = await ProductModel.findByPk(req.body.Id)

            if (product) {

                product.Description = req.body.Description,
                product.UpdateData = new Date();

                await product.save();
            }
      
            return res.json(newProduct)

        } catch (e) {
            return res.status(400).console.error("Erro:", e)
        }
    },

    async Delete(req, res) {
        try {
            const product = await ProductModel.findByPk(req.body.Id)
            
            await product.destroy()

            return res.status(204)
        } catch (e) {
            return res.status(400).console.error("Erro:", e)
        }
    }
}