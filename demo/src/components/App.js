import React from 'react';
import PropTypes from 'prop-types';
import './../styles/app.css';
import './../styles/sidebar.css';
import UsersPage from './users/UsersPage';

const App = () => {
    return (<div style={{ position: 'relative' }}>
        <div id='content'>
            <div style={{ padding: 20 }}>
                <UsersPage />
            </div>
        </div>
    </div>);
}

export default App;