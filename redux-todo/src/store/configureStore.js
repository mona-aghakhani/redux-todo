import { createStore,applyMiddleware,compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';

export default function configureStore() {

    const composeEnhancers =process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

    return store
}