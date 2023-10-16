export const ButtonProfile = ({ onClick }) => {
  return (
    <button className="no-style-button button-add" onClick={onClick}>
      <li className="nav-item">
        <img className="user-icon" src="../src/assets/user.png" alt="User" />
      </li>
      <li className="nav-item">
        <span className="admin">Admin</span>
      </li>
    </button>
  )
}
