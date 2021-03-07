/* eslint-disable react/prop-types */
import React from 'react';

const UserRow = ({ user, onClick }) => {
    return (
        <tr className="row" onClick={() => onClick(user)} style={{ cursor: 'pointer' }}>
            <td className="collapsing middle aligned">
                <i className={`big ${user.active ? 'meblueicon' : 'grey'} user circle middle aligned icon`} style={{ marginLeft: '0.25rem' }}></i>
            </td>
            <td className="middle aligned">
                <b>{user.email}</b>
            </td>
            <td className="collapsing right aligned">
                <button className="ui tiny basic icon button" style={{ marginRight: 10 }}>
                    <i className="edit outline icon"></i>
                </button>
            </td>
        </tr>
    );
};

export default UserRow;