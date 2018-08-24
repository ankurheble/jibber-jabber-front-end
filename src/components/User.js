import React from 'react';

export default function User(props){
    return <React.Fragment>
        <div className="user-avatar">
            <img src={props.user.picture.medium} alt="User profile" className="user-avatar-img"/>
            <p>{`${props.user.name.first} ${props.user.name.last}`}</p>
        </div>
    </React.Fragment>;
}