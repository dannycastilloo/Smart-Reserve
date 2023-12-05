import './index.scss'

export const ButtonProfile = ({ onClick }) => {
    return (
        <button className="no-style-button button-add" onClick={onClick}>
            <img className="user-icon" src="../src/assets/Avatar.svg" alt="User" />
        </button>
    )
}  