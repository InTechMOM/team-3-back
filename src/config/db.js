const mongoose = require(mongoose);

//password = 'Autobus1';
//username = 'Administrador de atlas';
const db_uri = `mongodb+srv://Administrador de atlas:Autobus1@atlascluster.3pc47up.mongodb.net/test`;

module.exports = async () => await mongoose.connect(db_uri, {useNewUrlPrser: true, useUniFiedTopology: true});
