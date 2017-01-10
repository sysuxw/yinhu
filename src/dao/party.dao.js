import mongoose from 'mongoose';
import partySchema from '../schema/party.schema';

const Party = mongoose.model('Party', partySchema);

function joinParty(users) {
    return new Promise((resolve, reject) => {
        for (var i = 0; i < users.length; i++) {
            let user = users[i];
            Party.create(user);
        }
    });
}

export default {
  joinParty
};
