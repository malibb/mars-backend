
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://angelprg:<PASSWORD>@cluster0-ifxvi.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});


const User = mongoose.model('User', {
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
		}
		
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

module.exports = { User }
