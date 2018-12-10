// Mongodb Models
import User  from '../../models/User';
import Home     from '../../models/Home';

export default {

    // User
    async me(_, args, context, info) {
        if(!context.user) throw new Error("Es necesario autenticarse");

        return User
            .findById(context.user._id)
            .then(user => {
                console.log( user.toObject() )
                return user.toObject() 
            })
            .catch(err => { throw err; })
    },

    async allUsers() {
        return await User.find();
    },

    // User
    async oneHome(_, { id }, context, info) {
        return await Home.findById(id);
    },

    async userHomes(_, {owner_email}, context, info){
        return await Home.find({ owner_email}).limit(10);
    },

    async allHomes() {
        return await Home.find();
    },
}
