import { combineReducers } from 'redux';

import twitterMessages from './messages';
import {authentication} from './authentication'

const rootReducer = combineReducers({
    twitterMessages,
    authentication
});

export default rootReducer;