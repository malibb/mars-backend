// Mongodb Models
import User     from '../../models/User';
import Home     from '../../models/Home';


// Utilities
import createToken      from '../../utils/createToken';
import comparePasswords from '../../utils/comparePasswords';

export default {

    // User
    async signUp(_, args, context, info){
        return await User
                .create(args.input)
                .then(user => {
                    let token = createToken(user)
                    return { token }
                })
                .catch(err => {
                    throw new Error(err)
                })
    },

    async login(_, args, context, info){
        return await comparePasswords(args.email, args.password)
            .then(token => { return { token } })
            .catch(err => { throw err })
    },

    // HOME
    async createHome(_, { input }, context) {
        if(!context.user) { throw new Error('Necesitas autenticarte... ')}
        return await Home
            .create(input)
            .then(home => { return home.toObject() })
            .catch(err => { throw err })
    },

    async updateHome(_, { id, input}){
        if(!context.user) { throw new Error('Necesitas autenticarte... ')}
        return await Home
            .findOneAndUpdate (id, { $set : input }, { new: true})
            .then(updatedHome => { return updatedHome })
            .catch(err => {throw err});
    },

    



    async deleteHome(_, { id }) {
        if(!context.user) { throw new Error('Necesitas autenticarte... ')}
        return await Home
            .findOneAndUpdate(id, { 'is_active' : false }, {new: true})
            .then(() => 'Eliminado exitosamente')
            .catch(err => { throw err });
    }
    
    

}
