const mongoose = require(mongoose);

const password = 'Autobus1';
const dbname = 'Administrador de atlas';
const uri = `mongodb+srv://Administrador de atlas:Autobus1@atlascluster.3pc47up.mongodb.net/test`;

module.exports = async () => await mongoose.connect(uri, {useNewUrlPrser: true, useUniFiedTopology: true});
