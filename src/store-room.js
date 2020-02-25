import {combineReducers} from 'redux';
import header from './header/reducer';
import profile from './dash-board/reducer';

export default combineReducers({
    header,
    profile
})