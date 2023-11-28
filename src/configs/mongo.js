import mongoose from 'mongoose';
import envs from './environment.js';
import initialData from './initial-data.js';
import log from './log.js';

const { mongo } = envs;

/**
 * Load all models
 */
async function loadModels() {
  await import('../models/user/user.model.js');
  await import('../models/member/member.model.js');
  await import('../models/club/club.model.js');
}

let mongoInstance;

/**
 * Connect to mongo database
 * @throws Exit the process with error -1
 */
async function connect() {
  if (!mongoInstance) {
    console.log(mongo.mongo_uri);
    return mongoose
      .connect(mongo.mongo_uri)
      .then(async (mongo) => {
        await loadModels();
        await initialData();
        mongoInstance = mongo;
      })
      .catch((error) => {
        log.error(error);
        process.exit(-1);
      });
  }
}

export default connect;
