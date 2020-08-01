import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducer from './persistReducer';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlwares = [SagaMiddleware];

const store = createStore(persistReducer(rootReducer), middlwares);
const persistor = persistStore(store);
SagaMiddleware.run(rootSaga);

export { store, persistor };
