import { model } from 'mongoose';
import clubSchema from './club.schema.js';

const ClubModel = model('Club', clubSchema);

export default ClubModel;
