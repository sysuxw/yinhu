import mongoose from 'mongoose';
import partySchema from '../schema/partySchema';

const Party = mongoose.model('Party', partySchema);

export function joinParty(users) {
    return new Promise((resolve, reject) => {
        for (var i = 0; i < users.length; i++) {
            let user = users[i];
            Party.create(user);
        }
    });
}
