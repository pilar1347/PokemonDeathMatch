import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as analyticsMiddleware } from '@carvana/analytics';
import configs from './configs';
import createRootReducer from './rootReducer';
import initialState from './initialState';

export const history = createBrowserHistory({
  basename: process.env.CARVANA_APP_PUBLIC_URL
});

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  analyticsMiddleware(configs)
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({
    level: 'info',
    collapsed: true
  }));
}

let preloadedState;
if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__;
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(
  createRootReducer(history),
  preloadedState || initialState,
  composedEnhancers
);
