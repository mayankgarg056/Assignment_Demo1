import { combineReducers } from 'redux';

import * as AssignMentReducer from '../Redux/Assignment.reducer';

//combine reducer defination
export default combineReducers(Object.assign(
    AssignMentReducer,
   
));