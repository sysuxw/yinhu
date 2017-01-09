const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let partySchema = new Schema({
    partyId: String,
    partyName: String,
    location: String,
    paticipator: [String],    // 参与者openId
    time: Date,
    intro: String
});

export default partySchema;
