const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const userSchema = new Schema({
    openId: String,
    username: String,
    telephone: String,
    gender: Boolean,
    birthday: Date,
    intro: String,
    create_date: Date,
    update_date: { type: Date, default: Date.now }
});
