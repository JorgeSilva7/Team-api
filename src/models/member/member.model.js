import { model } from 'mongoose';
import memberSchema from './member.schema.js';

const MemberModel = model('Member', memberSchema);

export default MemberModel;
