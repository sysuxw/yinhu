const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const partySchema = new Schema({
    partyName: String,
    location: String,
    time: String,
    intro: String,
    create_date: Date,
    update_date: { type: Date, default: Date.now }
});

export const joinPartySchema = new Schema({
    userId: String,
    partyId: String,
    create_date: { type: Date, default: Date.now }
});
