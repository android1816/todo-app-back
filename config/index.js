var configValue = require("./config.json");

module.exports = {
  getDbConnectionString: function () {
    return `mongodb://hello:1234@cluster0-shard-00-00.df5rj.mongodb.net:27017,cluster0-shard-00-01.df5rj.mongodb.net:27017,cluster0-shard-00-02.df5rj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3llv1l-shard-0&authSource=admin&retryWrites=true&w=majority`;
  },
};
