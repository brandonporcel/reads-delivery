import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => true);
export default store;
