import Express from 'express';
import envs from './configs/environment.js';
import userRouter from './routers/user.router.js';
import clubRouter from './routers/club.router.js';
import authRouter from './routers/auth.router.js';
import connectMongo from './configs/mongo.js';
import log from './configs/log.js';
import cors from 'cors';

const { port } = envs;

const app = Express();

function serverConfigs() {
  app.use(Express.json());
  app.use(cors());
}

function loadRoutes() {
  app.use('/users', userRouter);
  app.use('/clubs', clubRouter);
  app.use('/auth', authRouter);
}

async function startServer() {
  serverConfigs();
  loadRoutes();
  await connectMongo();

  app.listen(port, () => {
    console.log(`🚀 Server running on port: ${port} 🚀`);
    log.info('Server running');
  });
}

startServer();
