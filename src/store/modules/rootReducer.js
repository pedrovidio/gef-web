import { combineReducers } from 'redux';

import project from './project/reducer';
import buyProject from './buyProject/reducer';

export default combineReducers({
  project,
  buyProject,
});
