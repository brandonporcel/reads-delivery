import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store));
export default store;
