import {combineReducers} from 'redux';
import header from './header/reducer';
import profile from './dash-board/reducer';
import account from './account/reducer';

export default combineReducers({
    header,
    profile,
    account
})