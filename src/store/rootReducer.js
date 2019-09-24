import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterDucks from '../components/DELETEME-Counter/ducks';

export default history => combineReducers({
  router: connectRouter(history),
  counter: counterDucks.reducer
});
