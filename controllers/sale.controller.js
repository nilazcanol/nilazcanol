const { response, request } = require('express');
const Sale = require('../models/sale');


const saleGet = async (req = request, res = response) => {

	const { limit = 5, since = 0 } = req.query;

	const [total, Sales] = await  Promise.all([
		Sale.countDocuments(),
		Sale.find().limit(Number(limit)).skip(Number(since))
	])

	res.json({
		total,
		Sales		
	});
};


const saveSale = async ( req = request, res = response) => {
    
    const { totalSale, saleDate } = req.body;
    console.log({
        totalSale, saleDate
    });


    const sale = new Sale({ totalSale, saleDate });

    sale.save();

    res.json({
        status: true,
        sale
    })
}

module.exports = { saleGet, saveSale }