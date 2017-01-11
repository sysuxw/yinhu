import mongoose from 'mongoose';
import { userSchema } from '../schema/user.schema';

const User = mongoose.model('User', userSchema);

const UserDao = {
    find() {
        return User.find().exec();
    },

    findOne(conditions) {
        const query = User.where(conditions);
        return query.findOne().exec();
    },

    findById(id) {
        return User.findById(id).exec();
    },

    addUser(form) {
        let user = new User(form);
        return user.save();
    }
};

export default UserDao;
