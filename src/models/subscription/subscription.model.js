import { model } from 'mongoose';
import subscriptionSchema from './subscription.schema.js';

const SubscriptionModel = model('Subscription', subscriptionSchema);

export default SubscriptionModel;
