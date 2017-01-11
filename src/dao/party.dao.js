import mongoose from 'mongoose';
import {
    partySchema,
    joinPartySchema
} from '../schema/party.schema';

const Party = mongoose.model('Party', partySchema);
const JoinParty = mongoose.model('JoinParty', joinPartySchema);

const PartyDao = {
    find() {
        return Party.find().exec();
    },

    findOne(conditions) {
        return Party.findOne(conditions).exec();
    },

    findById(id) {
        return Party.findById(id).exec();
    },

    deleteById(id) {
        return Party.findByIdAndRemove(id).exec();
    },

    updateById(id, form) {
        return Party.findByIdAndUpdate(id, form).exec();
    },

    create(form) {
        return Party.create(form);
    },

    findJoinParty(conditions) {
        return JoinParty.findOne(conditions).exec();
    },

    joinParty(form) {
        return JoinParty.create(form);
    }
};

export default PartyDao;
