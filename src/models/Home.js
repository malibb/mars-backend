const mongoose = require('mongoose');
const Schema = mongoose.Schema

//*** Id Home, Id User
const homeSchema = new Schema({

		title		: String,
		description	: String,
		
		/* etc */
		photos		: {
			title		: String,
			url			: String,
			dateCreted	: Date
        }
        
        //Referencia a ***
});