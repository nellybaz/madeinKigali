import {combineReducers} from 'redux';
import flashdealsReducers from './flashdealsReducer';

export default combineReducers({
    flashdeals: flashdealsReducers
});