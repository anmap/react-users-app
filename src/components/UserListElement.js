import React from 'react';

/**
 * User list element component
 */
export default class UserListElement extends React.Component {
    render() {
        const user = this.props.user;
        return(
            <tr>
                <td>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <a href={`/user-edit/${user.id}`}>
                        Edit
                    </a>
                </td>
                <td>
                    <button data-id={user.id}>Delete</button>
                </td>
            </tr>
        );
    }
}

// Make suer we have all the props
UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}