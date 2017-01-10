import mongoose from 'mongoose';
import userSchema from '../schema/user.schema';

const User = mongoose.model('User', userSchema);

function list(users) {
    return User.find().exec();
}

export default {
  list
};
