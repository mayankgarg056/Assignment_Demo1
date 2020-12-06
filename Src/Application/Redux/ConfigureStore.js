import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer';
import rootSaga from './RootSaga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, {}, compose(applyMiddleware(
        // logger,
        sagaMiddleware,)));
    sagaMiddleware.run(rootSaga);
    return store;
}