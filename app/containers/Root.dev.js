import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';

import App from '../components/App';
// import DevTools from './DevTools';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/">
                    <App />
                </Route>
            </Router>
            {/* <DevTools /> */}
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
