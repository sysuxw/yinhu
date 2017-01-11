import mongoose from 'mongoose';
import bluebird from 'bluebird';

export default function configDB() {
    mongoose.Promise = bluebird;
    mongoose.connect('mongodb://localhost/test', {
        config: {
            autoIndex: false
        }
    });
}
