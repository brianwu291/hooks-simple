import React, { useState } from 'react';
import ResourceList from './ResourceList.js';
import UserList from './UserList.js';

const App = () => {
    const [resource, setResource] = useState('posts');
    return(
        <div className="ui container" style={{ marginTop: '30px' }}>
            <UserList />
            <div className="ui secondary pointing menu">
                <button className="ui primary button" style={{ marginRight: '3rem' }}
                        onClick={ () => setResource('posts') }
                        >Posts</button>
                <button className="ui positive button"
                        onClick={ () => setResource('todos') }
                        >Todos</button>
            </div>

            <div className="ui list">
                <div className="item">
                    <ResourceList resource={resource} />
                </div>
            </div>
        </div>
    );
};

export default App;