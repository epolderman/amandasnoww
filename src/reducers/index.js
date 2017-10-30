import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import activeprojectReducer from './activeprojectReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  activeProject: activeprojectReducer
});

export default rootReducer;
