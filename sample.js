var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var uri = "mongodb://<tuyetnhi16>:<123456>@nodetestdb-shard-00-00.hpqif.mongodb.net:27017,nodetestdb-shard-00-01.hpqif.mongodb.net:27017,nodetestdb-shard-00-02.hpqif.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-y1lui3-shard-0&authSource=admin&retryWrites=true&w=majority&ssl=true";
MongoClient.connect(uri, { useUnifiedTopology: true });

const schema = new mongoose.Schema({ size: 'string' });
const Tank = mongoose.model('Tank', schema);


Tank.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  console.log("maill", small);
  // saved!
});

// or, for inserting large batches of documents