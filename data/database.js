const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb://localhost:27017';
if (process.env.MONGODB_URL) {
  mongodbUrl = process.env.MONGODB_URL;
}
let database;

async function connect() {
  const client = await MongoClient.connect(mongodbUrl);
  database = client.db('blog');
}

function getDb() {
  if (!database) {
    throw { message: 'Database connection not established!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
};
