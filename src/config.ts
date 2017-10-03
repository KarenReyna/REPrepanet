const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://root:<PASSWORD>@reprepanet-shard-00-00-zhrkz.mongodb.net:27017,reprepanet-shard-00-01-zhrkz.mongodb.net:27017,reprepanet-shard-00-02-zhrkz.mongodb.net:27017/test?ssl=true&replicaSet=REPrepanet-shard-0&authSource=admin',
    port: process.env.PORT || 8000,
    uri: process.env.URI || "localhost"
  };
  
  export default config;