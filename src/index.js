import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import NameForm from './components/name-form';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <NameForm />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
