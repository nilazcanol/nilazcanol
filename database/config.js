const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		
        await mongoose.connect( process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useCreateIndex:true,
            useFindAndModify: false
            
        });

        console.log('Database connected!');

	} catch (error) {
		console.log(error.message);
		throw new Error('Error when starting the database');
	}
};

module.exports = {
	dbConnection,
};
