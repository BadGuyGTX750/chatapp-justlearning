
const ConnectedUsers = ({ users }) => {
    return(
        <div className="user-list">
            <h4>Connected Users</h4>
            {users.map((user,idx) => {
                return(
                    <h6 key={idx}>{user}</h6>
                )
            })}
        </div>
    )
}

export default ConnectedUsers
