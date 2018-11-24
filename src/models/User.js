const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema({
	name		: {
		first	: String,
		last	: String,
	},
	email		: String,
	age			: Number,
	/* etc */
	
	homes:	{
		title		: String,
		description	: String,
		
		/* etc */
		photos		: {
			title		: String,
			url			: String,
			dateCreted	: Date
		},
		
		reservations	: {
			dateStart	: Date,
			dateEnd		: Date,
			dateReserv	: { 
				type: Date, 
				default: Date.now,
			},
		}
	}
	
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;