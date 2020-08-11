import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './localRedux';
import App from './App';
import './i18n';
import { LoadingOutlined } from '@ant-design/icons';
import 'element-theme-default';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk';


const store = createStore(allReducers, applyMiddleware(thunk));

window.store = store
ReactDOM.render(
    <Suspense fallback={(
        <div className="icons-list">
            <LoadingOutlined className="text-danger float-right" />
        </div>
    )}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense >,
    document.getElementById('root')
)
