import mongoose from 'mongoose';
import bluebird from 'bluebird';

export default () => {
    mongoose.Promise = bluebird;
    mongoose.connect('mongodb://localhost/test');
}
