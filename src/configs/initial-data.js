import UserModel from '../models/user/user.model.js';
import envs from './environment.js';

const { createAdmin } = envs;

/**
 * Add admin user
 */
async function addAdmin() {
  if (createAdmin.enabled === 'true') {
    const { admin } = createAdmin;
    await UserModel.create(admin)
      .then(() => console.log('Admin added'))
      .catch((error) => console.error(error));
  }
}

/**
 * Run initial data functions
 */
async function initialData() {
  await addAdmin();
}

export default initialData;
