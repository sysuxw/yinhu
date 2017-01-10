const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    openId: String,
    username: String,
    telephone: String,
    gender: Boolean,
    birthday: Date,
    intro: String,
    create_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now }
});

export default userSchema;
