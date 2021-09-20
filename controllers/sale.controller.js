const { response, request } = require('express');
const Sale = require('../models/sale');


const saleGet = async (req = request, res = response) => {

	const { date = new Date() } = req.query;
    const dateNow = new Date()


    if(typeof date == 'object'){         
        const Sales = await (await Sale.find()).filter( sale => ( sale.saleDate.getMonth() == dateNow.getMonth() ))        
        return res.json({
            total:Sales.length,
            Sales
        });        
    }else{  
        const dateIn = new Date(date);     
        const Sales = await (await Sale.find()).filter( sale => ( sale.saleDate.getMonth()+1 == dateIn.getMonth()+1 ))
           
        return res.json({
            total: Sales.length,
            Sales
        });
    }

};


const saveSale = async ( req = request, res = response) => {
    
    const { totalSale, saleDate } = req.body;

    const dateNow = new Date(saleDate)

    
    const sale = new Sale({ totalSale, saleDate : dateNow  });

    sale.save();

    res.json({
        status: true,
        sale
    })
}



module.exports = { saleGet, saveSale, }