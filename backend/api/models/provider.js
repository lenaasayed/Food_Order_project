// const {mongo} = require('mongoose');
// const client = new mongo();

// const { MongoClient } = require('mongodb');
const  mongoose  = require('mongoose');

const {shema_provider} = require('../schemas/providerSchema')
//create provider model
const Provider = mongoose.model('Provider',shema_provider)


module.exports = {Provider}
