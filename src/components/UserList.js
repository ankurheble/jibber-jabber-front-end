import React from 'react';
import User from './User';

export default function UserList(props){
    return <React.Fragment>
        <div className="user-list list-group">
        {
            props.users.map(user => {
                return <li className="list-group-item" key={user.email}><User user={user} /></li>
            })
        }
        </div>
    </React.Fragment>;
}