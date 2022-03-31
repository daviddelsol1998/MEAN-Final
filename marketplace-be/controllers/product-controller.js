const Product = require('../models/product')

exports.createProduct = async (req, res, next) => {
    try {
        let product;
        product = new Product(req.body)
        await product.save()

        res.send(product)

    } catch (e) {
        console.log(e);
        res.status(500).send('An error has occurred')
    }
}

exports.getProducts = async (req, res, next) => {

    try {
        
        const products = await Product.find()
        res.json(products)

    } catch (e) {
        console.log(e);
        res.status(500).send('An error has occurred')
    }

}

exports.getProduct = async (req, res, next) => {
    try {
        
        let product = await Product.findById(req.params.id)

        if (!product) {
            res.status(404).json({message : 'Product not found'})
        }
        res.json(product)

    } catch (e) {
        console.log(e);
        res.status(500).send('An error has occurred')
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        
        let product = await Product.findById(req.params.id)

        if (!product) {
            res.status(404).json({message : 'Product not found'})
        }
        await Product.findOneAndRemove({_id: req.params.id})
        res.json({
            message : 'Product has been deleted'
        })

    } catch (e) {
        console.log(e);
        res.status(500).send('An error has occurred')
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        
        const {name, category, location, price} = req.body
        let product = await Product.findById(req.params.id)

        if (!product) {
            res.status(404).json({message : 'Product not found'})
        }

        product.name = name
        product.category = category
        product.location = location
        product.price = price

        product = await Product.findOneAndUpdate({_id: req.params.id} ,product, {new: true})
        res.json(product)

    } catch (e) {
        console.log(e);
        res.status(500).send('An error has occurred')
    }
}